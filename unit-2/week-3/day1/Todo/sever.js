//npm init -y
//npm install express dotenv mongoose
const mongoose = require('mongoose');// activates mongoose
const express = require('express');

require('dotenv').config();// link to the .env code
const app = express();
const port = process.env.PORT;// linking to a .env filr always has to have process.env
//ENV WILL ALWAYS IMPORT AS A STRING
// import schema
const Todo = require('./models/todo.js')
//MIDDLEWEAR
app.use(express.json())

//CODE
app.get('/', (req,res) => {
    res.send(`<h1> Hello ${process.env.NAME}</h1>`)
});

//returns the database
app.get('/todo', async (req,res) => {
    try{
        res.json(await Todo.find({}))
    } catch (err){
        res.status(400).json(err)
    }
})
//adds to the database
app.post('/todo', async (req,res) => {
    try{
        res.json(await Todo.create(req.body))
    } catch (err){
        res.status(400).json(err)
    }
})
//deletes from the database
app.delete('/todo/:id', async (req,res) => {
    try{
        res.json(await Todo.findByIdAndDelete(req.params.id))
    } catch (err){
        res.status(400).json(err)
    }
})
//Update something in the database
app.put('/todo/:id', async (req,res) => {
    try{
        res.json(await Todo.findByIdAndUpdate(req.params.id, req.body))
    } catch (err){
        res.status(400).json(err)
    }
})

app.listen(port, () => {
    console.log(`hi this is port ${port}`)
});