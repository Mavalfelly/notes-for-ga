const express = require('express')
const app = express()
//needed for req.body. lets it parse though JSON
app.use(express.json())

//first route
let total = 0;
app.get('/calculator', (req,res) => {
    res.json({total: total})
})

app.get('/calculator/:addition', (req,res) => {
    //any req.params or req.query is a string.
    let num = parseInt(req.params.addition)
    res.json({total: total + num })
})

//first post route
//req.body 

app.post('/calculator', (req,res) => {
    const operation = req.body.operation
    const number = req.body.number
    res.json({operation: operation, number})
})

const port = 3005
app.listen(port, () => {
    console.log('hello')
})