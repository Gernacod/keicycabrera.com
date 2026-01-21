const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const organizationSchema = new mongoose.Schema({
    organizationId: {
        type: String,
        default: () => uuidv4(),
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    },
    settings: {
        type: Map,
        of: mongoose.Schema.Types.Mixed,
        default: {}
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Update timestamp on save
organizationSchema.pre('save', function () {
    this.updatedAt = Date.now();
});

module.exports = mongoose.model('Organization', organizationSchema);
