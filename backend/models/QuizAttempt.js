const mongoose = require('mongoose');

const quizAttemptSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    quizTitle: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    totalQuestions: {
        type: Number,
        required: true
    },
    passed: {
        type: Boolean,
        required: true
    },
    attemptedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('QuizAttempt', quizAttemptSchema);
