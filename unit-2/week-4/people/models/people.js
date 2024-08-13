const mongoose = require('./connection');
const peopleSchema = new mongoose.Schema({
    name: String,
    imageUrl: String,
    title: String,
});

const People = mongoose.model('people', peopleSchema);
module.exports = People