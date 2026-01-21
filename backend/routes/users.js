const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { auth, isOwner } = require('../middleware/auth');

/**
 * @route   GET /api/users
 * @desc    Get all users (Only for OWNER)
 * @access  Private
 */
router.get('/', auth, isOwner, async (req, res) => {
    try {
        const users = await User.find({}).select('-password').sort({ createdAt: -1 });
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Error del servidor al obtener usuarios' });
    }
});

/**
 * @route   PUT /api/users/:id
 * @desc    Update user role or status (Only for OWNER)
 * @access  Private
 */
router.put('/:id', auth, isOwner, async (req, res) => {
    try {
        const { role, firstName, lastName, isActive } = req.body;

        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        // Update fields if provided
        if (role) user.role = role;
        if (firstName) user.firstName = firstName;
        if (lastName) user.lastName = lastName;
        if (typeof isActive === 'boolean') user.isActive = isActive;

        await user.save();

        const updatedUser = user.toObject();
        delete updatedUser.password;

        res.json(updatedUser);
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
});

/**
 * @route   DELETE /api/users/:id
 * @desc    Delete user (Only for OWNER)
 * @access  Private
 */
router.delete('/:id', auth, isOwner, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        // Prevent self-deletion
        if (user.email === req.user.email) {
            return res.status(400).json({ error: 'No puedes eliminar tu propia cuenta de propietario.' });
        }

        await User.findByIdAndDelete(req.params.id);
        res.json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
});

module.exports = router;
