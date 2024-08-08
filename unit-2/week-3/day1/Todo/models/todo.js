// impotrt conection object
const mongoose = require('./connection.js');
const todoSchema = new mongoose.Schema({
    item: String,
    isComplete: String,
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;