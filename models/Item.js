const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
    {
        date: Date,
        category: String, 
        question: String,
        answer: Number
    }
);

module.exports = mongoose.model('Item', itemSchema);
