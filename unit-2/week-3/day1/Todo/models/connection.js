const mongoose = require('mongoose');// import mongoose package
require('dotenv').config();
mongoose.connect(process.env.MONGOOSE);
                                                                                    //Database name is after .net/
// connect to datadase with a string

//OPTIONAL LINES OF CODE: will checked the status of our connection to the db
mongoose.connection
    .on('open', () => console.log('connected'))
    .on('close', () => console.log('disconnected'))
    .on('error', (err) => console.log('error', err))

//export mongoose the VARIABLE with all its configurations above!

module.exports = mongoose;//exports the connection so that is be used elsewere this object is the key to the database. dont let people know it.