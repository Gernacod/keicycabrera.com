const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        enum: ['OWNER', 'ADMIN', 'MEMBER']
    },
    description: {
        type: String,
        required: true
    },
    permissions: [{
        type: String,
        enum: [
            'manage_organization', // Delete org, change name
            'manage_billing',      // Subscriptions, payments
            'manage_roles',        // Assign roles to others
            'manage_users',        // Invite/remove users
            'view_reports',        // Analytics
            'edit_content',        // Courses, documents
            'view_content'         // Access materials
        ]
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Role', RoleSchema);
