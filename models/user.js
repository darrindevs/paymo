const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    firstname: {
        type: String,
        required: true,
        trim: true,
        minlength: 2
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        minlength: 2
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: false 
    }
}, 

{
    timestamps: true,
}); 

 const User = mongoose.model('User', userSchema);

 module.exports = User;

