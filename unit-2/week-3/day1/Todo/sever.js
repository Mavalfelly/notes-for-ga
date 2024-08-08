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
app.use(express.urlencoded({extended:true}))// NEED FOR FORMS
//CODE
app.get('/', (req,res) => {
    res.render(`home.ejs`)
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

app.get('/todo-ejs', async (req,res) => {
    try{
        let listOfThings = await Todo.find({})
        res.render('home.ejs',{k: listOfThings})
    } catch (err){
        res.status(400).json(err)
    }
})
app.get('/test', async (req,res) => {
    try{
        let listOfThings = await Todo.find({})
        res.render('list.ejs',{k: listOfThings})
    } catch (err){
        res.status(400).json(err)
    }
})
//adds to the database
app.post('/todo-ejs', async (req,res) => {
    try{
        res.json(await Todo.create(req.body))
    } catch (err){
        res.status(400).json(err)
    }
})
//deletes from the database
app.delete('/todo-ejs/:id', async (req,res) => {
    try{
        res.json(await Todo.findByIdAndDelete(req.params.id))
    } catch (err){
        res.status(400).json(err)
    }
})
//Update something in the database
app.put('/todo-ejs/:id', async (req,res) => {
    try{
        res.json(await Todo.findByIdAndUpdate(req.params.id, req.body))
    } catch (err){
        res.status(400).json(err)
    }
})

app.listen(port, () => {
    console.log(`hi this is port ${port}`)
});