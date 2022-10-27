const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema(
    {
        date: Date,
        response: Number, 
        isCorrect: Boolean,
        currentScore: Number
    }
);

module.exports = mongoose.model('Response', responseSchema);