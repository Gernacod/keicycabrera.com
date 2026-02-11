const mongoose = require('mongoose');

const roleAssignmentSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        index: true
    },
    organizationId: {
        type: String,
        required: true,
        index: true
    },
    role: {
        type: String,
        enum: ['OWNER', 'ADMIN', 'MEMBER'],
        default: 'MEMBER',
        required: true
    },
    assignedAt: {
        type: Date,
        default: Date.now
    }
});

// Ensure a user has only one role per organization
roleAssignmentSchema.index({ userId: 1, organizationId: 1 }, { unique: true });

module.exports = mongoose.model('RoleAssignment', roleAssignmentSchema);
