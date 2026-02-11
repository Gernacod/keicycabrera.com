const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const { auth, isOwner } = require('../middleware/auth');

// @route   POST /api/messages
// @desc    Create a new message (Public)
// @access  Public
router.post('/', async (req, res) => {
    try {
        const { firstName, lastName, email, phone, content } = req.body;

        if (!firstName || !lastName || !email || !phone || !content) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }

        const newMessage = new Message({
            firstName,
            lastName,
            email,
            phone,
            content
        });

        await newMessage.save();
        res.status(201).json({ message: 'Mensaje enviado con éxito' });
    } catch (error) {
        console.error('Error creating message:', error);
        res.status(500).json({ error: 'Error al enviar el mensaje' });
    }
});

// @route   GET /api/messages
// @desc    Get all messages (Owner only)
// @access  Private/Owner
router.get('/', auth, isOwner, async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 });
        res.json(messages);
    } catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).json({ error: 'Error al obtener mensajes' });
    }
});

// @route   PATCH /api/messages/:id
// @desc    Update message status
// @access  Private/Owner
router.patch('/:id/read', auth, isOwner, async (req, res) => {
    try {
        const message = await Message.findByIdAndUpdate(req.params.id, { status: 'READ' }, { new: true });
        if (!message) return res.status(404).json({ error: 'Mensaje no encontrado' });
        res.json(message);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar mensaje' });
    }
});

// @route   DELETE /api/messages/:id
// @desc    Delete a message
// @access  Private/Owner
router.delete('/:id', auth, isOwner, async (req, res) => {
    try {
        const message = await Message.findByIdAndDelete(req.params.id);
        if (!message) return res.status(404).json({ error: 'Mensaje no encontrado' });
        res.json({ message: 'Mensaje eliminado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar mensaje' });
    }
});

module.exports = router;
