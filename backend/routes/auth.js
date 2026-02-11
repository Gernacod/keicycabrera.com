const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Organization = require('../models/Organization');
const RoleAssignment = require('../models/RoleAssignment');
const { auth } = require('../middleware/auth');
const { OAuth2Client } = require('google-auth-library');
const { v4: uuidv4 } = require('uuid');
const crypto = require('crypto');
const sendEmail = require('../utils/sendEmail');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Helper function to generate JWT
const generateToken = (userId, organizationId, role) => {
    return jwt.sign(
        { userId, organizationId, role },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    );
};

// Helper function to create slug from name
const createSlug = (name) => {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
};

// @route   POST /api/auth/register
router.post('/register', async (req, res) => {
    try {
        const { email, password, firstName, lastName, organizationName } = req.body;
        if (!email || !password || !firstName || !lastName) {
            return res.status(400).json({ error: 'Faltan campos obligatorios' });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ error: 'El usuario ya existe' });

        // Multi-tenant: Create Organization
        const orgName = organizationName || `${firstName} ${lastName}'s Project`;
        const organization = new Organization({
            name: orgName,
            slug: createSlug(orgName) + '-' + Date.now()
        });
        await organization.save();

        // Create User
        const user = new User({
            email,
            password,
            firstName,
            lastName,
            organizationId: organization.organizationId,
            role: 'MEMBER' // Default role
        });
        await user.save();

        // Assign Role in the new table
        const roleAssignment = new RoleAssignment({
            userId: user.userId,
            organizationId: organization.organizationId,
            role: 'MEMBER'
        });
        await roleAssignment.save();

        const token = generateToken(user.userId, user.organizationId, user.role);
        res.status(201).json({ message: 'Usuario registrado', token, user });
    } catch (error) {
        console.error('Register Error:', error);
        res.status(500).json({ error: 'Error del servidor en registro' });
    }
});

// @route   POST /api/auth/login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, isActive: true });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ error: 'Credenciales inválidas' });
        }
        user.lastLogin = Date.now();
        await user.save();

        const organization = await Organization.findOne({ organizationId: user.organizationId });
        const token = generateToken(user.userId, user.organizationId, user.role);

        res.json({
            message: 'Iniciado con éxito',
            token,
            user: { ...user._doc, organizationName: organization?.name }
        });
    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({ error: 'Error del servidor en login' });
    }
});

// @route   POST /api/auth/google
router.post('/google', async (req, res) => {
    console.log('--- Google Auth Request Received ---', req.body);
    try {
        const { credential, access_token } = req.body;
        let userData;

        if (credential) {
            // Flow from One Tap (JWT)
            const ticket = await client.verifyIdToken({
                idToken: credential,
                audience: process.env.GOOGLE_CLIENT_ID
            });
            userData = ticket.getPayload();
        } else if (access_token) {
            // Flow from Custom Button (Access Token)
            const googleRes = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`);
            if (!googleRes.ok) {
                const errorText = await googleRes.text();
                console.error('Google UserInfo Error:', errorText);
                throw new Error('Failed to fetch user info from Google');
            }
            userData = await googleRes.json();
        } else {
            return res.status(400).json({ error: 'No se enviaron datos de Google' });
        }

        const { email, sub, given_name, family_name, picture } = userData;
        if (!email) {
            return res.status(400).json({ error: 'Google no proporcionó un email' });
        }

        let user = await User.findOne({ email });

        if (!user) {
            // New User: Create Organization
            const orgName = `${given_name || 'User'}'s Project`;
            const organization = new Organization({
                name: orgName,
                slug: createSlug(orgName) + '-' + Date.now()
            });
            await organization.save();

            user = new User({
                email,
                password: sub || uuidv4(), // Dummy password
                firstName: given_name || 'User',
                lastName: family_name || '',
                organizationId: organization.organizationId,
                role: 'MEMBER', // Default role
                isGoogleUser: true,
                avatar: picture
            });
            await user.save();

            // Assign Role in the new table
            const roleAssignment = new RoleAssignment({
                userId: user.userId,
                organizationId: organization.organizationId,
                role: 'MEMBER'
            });
            await roleAssignment.save();
        }

        user.lastLogin = Date.now();
        await user.save();

        const organization = await Organization.findOne({ organizationId: user.organizationId });
        const token = generateToken(user.userId, user.organizationId, user.role);

        res.json({
            token,
            user: {
                userId: user.userId,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role,
                organizationId: user.organizationId,
                organizationName: organization?.name || 'Unknown'
            }
        });
    } catch (error) {
        console.error('CRITICAL Google Auth Error:', {
            message: error.message,
            stack: error.stack,
            body: req.body
        });
        res.status(500).json({
            error: 'Google authentication failed',
            details: error.message
        });
    }
});

// @route   POST /api/auth/forgot-password
router.post('/forgot-password', async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: 'No se encontró una cuenta con ese correo.' });
        }

        // Generate reset token
        const resetToken = crypto.randomBytes(20).toString('hex');

        // Hash and set resetPasswordToken
        user.resetPasswordToken = crypto
            .createHash('sha256')
            .update(resetToken)
            .digest('hex');

        // Set expire (1 hour)
        user.resetPasswordExpire = Date.now() + 3600000;

        await user.save();

        // Create reset URL
        const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`;

        const html = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; rounded: 10px;">
                <h2 style="color: #184476; text-align: center;">Restablecer Contraseña</h2>
                <p>Hola ${user.firstName},</p>
                <p>Has solicitado restablecer tu contraseña para tu cuenta en Keicy Cabrera. Haz clic en el siguiente botón para continuar:</p>
                <div style="text-align: center; margin: 30px 0;">
                    <a href="${resetUrl}" style="background-color: #184476; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">Restablecer Contraseña</a>
                </div>
                <p>Si no solicitaste este cambio, puedes ignorar este correo de forma segura.</p>
                <p>Este enlace expirará en 1 hora.</p>
                <hr style="border: 0; border-top: 1px solid #eee; margin-top: 30px;">
                <p style="font-size: 12px; color: #777; text-align: center;">Keicy Cabrera Platform</p>
            </div>
        `;

        try {
            await sendEmail({
                email: user.email,
                subject: 'Restablecer Contraseña - Keicy Cabrera',
                html
            });

            res.status(200).json({ message: 'Correo de restablecimiento enviado.' });
        } catch (error) {
            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;
            await user.save();

            return res.status(500).json({ error: 'No se pudo enviar el correo. Intenta de nuevo.' });
        }
    } catch (error) {
        console.error('Forgot Password Error:', error);
        res.status(500).json({ error: 'Error del servidor' });
    }
});

// @route   POST /api/auth/reset-password
router.post('/reset-password/:token', async (req, res) => {
    // Hash token from URL
    const resetPasswordToken = crypto
        .createHash('sha256')
        .update(req.params.token)
        .digest('hex');

    try {
        const user = await User.findOne({
            resetPasswordToken,
            resetPasswordExpire: { $gt: Date.now() }
        });

        if (!user) {
            return res.status(400).json({ error: 'El enlace de restablecimiento es inválido o ha expirado.' });
        }

        // Set new password
        user.password = req.body.password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save();

        res.status(200).json({ message: 'Contraseña actualizada con éxito.' });
    } catch (error) {
        console.error('Reset Password Error:', error);
        res.status(500).json({ error: 'Error del servidor' });
    }
});

module.exports = router;
