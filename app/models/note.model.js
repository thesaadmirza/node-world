const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);