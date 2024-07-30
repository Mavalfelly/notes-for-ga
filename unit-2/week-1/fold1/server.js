const express = require('express')
const port = 3001
const app = express()


app.get('/', (req, res) => {
    
    res.send(`<h1>Howdy</h1>`)
})


//each /: needs to be a slash
app.get('/:age/:name', (req, res) => {
    const age = req.params.age
    const name = req.params.name
    res.send(`<h1>Hello ${name}, I am computer, and you are ${age} years old</h1>`)
})
//localhost:3001/21/matt


//query Parameters

app.get('/trainer', (req,res) => {
    const name = req.query.name
    const type = req.query.type
    res.send(`trainer:${name} is of the type: ${type}`)
})
//localhost:3001/trainer?name=ash&type=human




app.listen(3001, () => {
    console.log(`listening to port ${port}`)
})