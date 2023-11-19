// renamed from product to user
const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
_id: mongoose.Schema.Types.ObjectId,

    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    isMentor: {
        type: Boolean
    }
});

module.exports = mongoose.model('User', userSchema);
