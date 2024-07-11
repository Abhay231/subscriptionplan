 

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    duration: {
        type: String, 
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Student', studentSchema);
