const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
    try {
        // Get token from header
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            return res.status(401).json({ error: 'No token provided, authorization denied' });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Find user
        const user = await User.findOne({ userId: decoded.userId, isActive: true });

        if (!user) {
            return res.status(401).json({ error: 'Token is not valid' });
        }

        // Attach user to request
        req.user = {
            userId: user.userId,
            organizationId: user.organizationId,
            email: user.email,
            role: user.role,
            firstName: user.firstName,
            lastName: user.lastName
        };

        next();
    } catch (error) {
        console.error('Auth middleware error:', error);
        res.status(401).json({ error: 'Token is not valid' });
    }
};

// Middleware to check if user is OWNER
const isOwner = (req, res, next) => {
    if (req.user.role !== 'OWNER') {
        return res.status(403).json({ error: 'Access denied. Owner role required.' });
    }
    next();
};

// Middleware to check if user is OWNER or MEMBER
const isMemberOrOwner = (req, res, next) => {
    if (!['OWNER', 'MEMBER'].includes(req.user.role)) {
        return res.status(403).json({ error: 'Access denied.' });
    }
    next();
};

module.exports = { auth, isOwner, isMemberOrOwner };
