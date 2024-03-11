const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/noteapp");

const plm = require("passport-local-mongoose");


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        
    },
    email: {
        type: String,
        required: true,
        
    },
    password: {
        type: String,
    }
});


userSchema.plugin(plm);
const User = mongoose.model('User', userSchema);


module.exports = User;