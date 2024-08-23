require('dotenv').config();
const mongoose = require('./connection');
const FruitSchema = new mongoose.Schema({
    name: String,
    readyToEat: Boolean,
    color: String,
    username: String,
})

const Fruits = mongoose.model('fruit',FruitSchema );
module.exports = Fruits;