require('dotenv').config();
const mongoose = require('./connection');
const UserSchema = new mongoose.Schema({
    username: {type: String, require:true, unique:true},
    password: {type: String, require:true},
})

const User = mongoose.model('user',UserSchema );
module.exports = User;


//New Packages
//npm install bcryptjs express-session connect-mongo

// Bcrypt is a package the encrypts passwords.can nos save direct passwords
//Express-session is middleware for reating session cookies. will determin if we are logged in or not from the presence of a cookie. this cookie must be valid.
//conncet.mongo allows express-session to save data in mongo db

//need to creat a sign up page and a log in page

