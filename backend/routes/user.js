const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { auth } = require('../middleware/auth');
const User = require('../models/User');

// Multer configuration for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let uploadPath = 'uploads/';
        if (file.fieldname === 'avatar') {
            uploadPath += 'avatars/';
        } else if (file.fieldname === 'coverPhoto') {
            uploadPath += 'covers/';
        }

        // Ensure directory exists
        if (!fs.existsSync(path.join(__dirname, '../', uploadPath))) {
            fs.mkdirSync(path.join(__dirname, '../', uploadPath), { recursive: true });
        }

        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: (req, file, cb) => {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Formato de imagen no válido. Use JPG, PNG o WebP.'));
        }
    }
});

// Update user profile information
router.post('/profile', auth, async (req, res) => {
    try {
        const { firstName, lastName, username, phoneNumber, occupation, bio } = req.body;

        // Find and update user
        const user = await User.findOne({ userId: req.user.userId });
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        // Check if username is already taken by another user
        if (username && username !== user.username) {
            const existingUser = await User.findOne({ username });
            if (existingUser) {
                return res.status(400).json({ error: 'El nombre de usuario ya está en uso' });
            }
        }

        user.firstName = firstName || user.firstName;
        user.lastName = lastName || user.lastName;
        user.username = username || user.username;
        user.phoneNumber = phoneNumber || user.phoneNumber;
        user.occupation = occupation || user.occupation;
        user.bio = bio || user.bio;
        user.updatedAt = Date.now();

        await user.save();

        res.json({
            message: 'Perfil actualizado con éxito',
            user: {
                firstName: user.firstName,
                lastName: user.lastName,
                username: user.username,
                phoneNumber: user.phoneNumber,
                occupation: user.occupation,
                bio: user.bio,
                avatar: user.avatar,
                coverPhoto: user.coverPhoto
            }
        });
    } catch (error) {
        console.error('Update profile error:', error);
        res.status(500).json({ error: 'Error al actualizar el perfil' });
    }
});

// Upload profile images (avatar and coverPhoto)
router.post('/upload-images', auth, upload.fields([
    { name: 'avatar', maxCount: 1 },
    { name: 'coverPhoto', maxCount: 1 }
]), async (req, res) => {
    try {
        const user = await User.findOne({ userId: req.user.userId });
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const updates = {};
        const baseUrl = 'http://localhost:5001/';

        if (req.files['avatar']) {
            updates.avatar = baseUrl + req.files['avatar'][0].path;
        }
        if (req.files['coverPhoto']) {
            updates.coverPhoto = baseUrl + req.files['coverPhoto'][0].path;
        }

        const updatedUser = await User.findOneAndUpdate(
            { userId: req.user.userId },
            { $set: updates },
            { new: true }
        );

        res.json({
            message: 'Imágenes subidas con éxito',
            avatar: updatedUser.avatar,
            coverPhoto: updatedUser.coverPhoto
        });
    } catch (error) {
        console.error('Upload images error:', error);
        res.status(500).json({ error: 'Error al subir las imágenes' });
    }
});

// Change password
router.post('/change-password', auth, async (req, res) => {
    try {
        const { currentPassword, newPassword, confirmPassword } = req.body;

        if (!currentPassword || !newPassword || !confirmPassword) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }

        if (newPassword !== confirmPassword) {
            return res.status(400).json({ error: 'Las nuevas contraseñas no coinciden' });
        }

        if (newPassword.length < 6) {
            return res.status(400).json({ error: 'La nueva contraseña debe tener al menos 6 caracteres' });
        }

        const user = await User.findOne({ userId: req.user.userId });
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        // Verify current password
        const isMatch = await user.comparePassword(currentPassword);
        if (!isMatch) {
            return res.status(400).json({ error: 'La contraseña actual es incorrecta' });
        }

        // Update password (will be hashed by pre-save hook)
        user.password = newPassword;
        user.updatedAt = Date.now();
        await user.save();

        res.json({ message: 'Contraseña actualizada con éxito' });
    } catch (error) {
        console.error('Change password error:', error);
        res.status(500).json({ error: 'Error al cambiar la contraseña' });
    }
});

// Update social links
router.post('/social-links', auth, async (req, res) => {
    try {
        const { facebook, twitter, linkedin, website, github } = req.body;

        const user = await User.findOne({ userId: req.user.userId });
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        user.socialLinks = {
            facebook: facebook || user.socialLinks?.facebook,
            twitter: twitter || user.socialLinks?.twitter,
            linkedin: linkedin || user.socialLinks?.linkedin,
            website: website || user.socialLinks?.website,
            github: github || user.socialLinks?.github
        };

        user.updatedAt = Date.now();
        await user.save();

        res.json({
            message: 'Enlaces sociales actualizados',
            socialLinks: user.socialLinks
        });
    } catch (error) {
        console.error('Update social links error:', error);
        res.status(500).json({ error: 'Error al actualizar enlaces sociales' });
    }
});

// Delete user account
router.delete('/account', auth, async (req, res) => {
    try {
        const user = await User.findOne({ userId: req.user.userId });
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        // Delete files if they exist locally
        if (user.avatar && user.avatar.includes('uploads/')) {
            try {
                const avatarPath = path.join(__dirname, '../', user.avatar.split('http://localhost:5001/')[1]);
                if (fs.existsSync(avatarPath)) fs.unlinkSync(avatarPath);
            } catch (err) { console.error('Error deleting avatar file:', err); }
        }
        if (user.coverPhoto && user.coverPhoto.includes('uploads/')) {
            try {
                const coverPath = path.join(__dirname, '../', user.coverPhoto.split('http://localhost:5001/')[1]);
                if (fs.existsSync(coverPath)) fs.unlinkSync(coverPath);
            } catch (err) { console.error('Error deleting cover file:', err); }
        }

        await User.deleteOne({ userId: req.user.userId });

        res.json({ message: 'Cuenta eliminada con éxito' });
    } catch (error) {
        console.error('Delete account error:', error);
        res.status(500).json({ error: 'Error al eliminar la cuenta' });
    }
});

module.exports = router;
