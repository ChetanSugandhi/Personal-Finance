const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    budgetAmount: {
        type: Number,
        required: true
    },
    month : {
        type : String,
        required : true
    },
    spentAmount : {
        type : Number,
        required : true
    },
    notes : {
        type : String,
        // default : ''
    }
});

module.exports = mongoose.model('Budget', budgetSchema);
