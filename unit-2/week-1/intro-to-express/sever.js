// npm init -y
// npm install express
//nodemon sever.js

//import the espress package
const express = require('express')

//creating an express app
const app = express()
//express() returns an instance of an express application

//define a '/' route
// this route will return an h1 with hello world
app.get('/', (req, res) => {
    res.send('<h1> Hello World!</h1>')
})

app.get('/matt', (req, res) => {
    res.send('<h1> Hello Matt</h1>')
})

app.get('/Theo', (req, res) => {
    res.send('<h1> Hello Theo</h1>')
})

app.get('/Matt/Theo', (req, res) => {
    res.send('<h1> Hello Matt and Theo</h1>')
})

app.get('/Matt/:name', (req, res) => {
    res.send(`<h1> Matt loves ${req.params.name} </h1>`)
})

app.get('/Matt/:name/:buzz', (req, res) => {
    res.send(`<h1> Matt loves ${req.params.name} and ${req.params.buzz}</h1>`)
})

app.get('/hello', (req, res) => {
    const name  = req.query.name
    const age  = req.query.age

     // Using the query parameters to customize the response
     res.send(`Hello there, ${name}! I hear you are ${age} years old!`);
})

// list for any requests on port 3000
app.listen(5000, () => {//3000-8000 active ports    
    console.log('listening on port 5000')
})