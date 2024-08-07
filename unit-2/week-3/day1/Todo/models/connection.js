const mongoose = require('mongoose');// import mongoose package
require('dotenv').config();
mongoose.connect(process.env.MONGOOSE);
                                                                                    //Database name is after .net/
// connect to datadase with a string


module.exports = mongoose;//exports the connection so that is be used elsewere this object is the key to the database. dont let people know it.