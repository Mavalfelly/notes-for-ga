const express = require('express')
const app = express()

//**************************//
//MiddleWare MUST BE BEFORE ROUTES
//**************************//
app.use(express.json())

//**************************//
//ROUTES
//**************************//
//Gets//
app.get('', (req,res) => {
    res.send('<h1>hello world</h1>')
})


let x = 0
//The similarity between let and var is that its value can be reassigned
//The difference between let and var is that let is block scope . This means that if a variable is inside of a block AKA curly bracket { } the variable is NOT accessible OUTSIDE these brackets
//var is function scope . This means that if a variable is inside of a block AKA curly bracket { } the variable is accessible. All variables inside a FUNCTION are accessible. Variables OUTSIDE of a function is not.



//res.send will only send strings
//res.json
app.get('/calculator',(req,res) => {
    res.json({total: x})
    //res.send('hello world')
})
//**************************//
// new verb
//**************************//
app.post('/calculator',(req,res) => {
    const number = req.body.number
    const operation = req.body.operation

    //if the operation is add, i am going to increase x by the selected number
    if(operation === 'add'){
        x = x + number
    }
    if(operation === 'subtract'){
        x = x - number
    }
    //if subtract, subtract
    res.json({number, operation, total: x})
    //res.send('hello world')
})





//**************************//
//LISTENER
//**************************//
app.listen(3000, () => {
    console.log('hello world')
})