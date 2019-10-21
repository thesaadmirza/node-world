const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require:true,
    },
    

}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);