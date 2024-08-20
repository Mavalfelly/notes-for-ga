require('dotenv').config();
const mongoose = require('mongoose')

mongoose.connect(process.env.DBURL)

mongoose.connection
    .on('open',()=>console.log('connected'))
    .on('close',()=>console.log('not connected'))
    .on('error',(err)=>console.log('error',err));

    module.exports = mongoose;