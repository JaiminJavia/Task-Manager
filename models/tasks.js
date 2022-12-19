const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: [true,"Task Description is mandatory"],
        maxLength: [50,"Task Description must be less than 50 characters"],
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }   
}, 
)


module.exports = mongoose.model('Task', taskSchema)