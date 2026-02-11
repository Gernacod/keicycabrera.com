const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        default: () => uuidv4(),
        unique: true,
        required: true
    },
    organizationId: {
        type: String,
        required: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: false,
        trim: true
    },
    role: {
        type: String,
        enum: ['OWNER', 'ADMIN', 'MEMBER'],
        default: 'MEMBER',
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    lastLogin: {
        type: Date
    },
    avatar: {
        type: String
    },
    coverPhoto: {
        type: String
    },
    username: {
        type: String,
        trim: true,
        unique: true,
        sparse: true
    },
    phoneNumber: {
        type: String,
        trim: true
    },
    occupation: {
        type: String,
        trim: true
    },
    bio: {
        type: String,
        trim: true
    },
    socialLinks: {
        facebook: { type: String, trim: true },
        twitter: { type: String, trim: true },
        linkedin: { type: String, trim: true },
        website: { type: String, trim: true },
        github: { type: String, trim: true }
    },
    isGoogleUser: {
        type: Boolean,
        default: false
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Hash password before saving
userSchema.pre('save', async function () {
    if (!this.isModified('password')) {
        return;
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    this.updatedAt = Date.now();
});

// Method to compare password
userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

// Compound index for organization + email uniqueness
userSchema.index({ organizationId: 1, email: 1 }, { unique: true });

module.exports = mongoose.model('User', userSchema);
