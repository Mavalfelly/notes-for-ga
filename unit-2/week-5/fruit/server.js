require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const Fruits = require('./models/fruit')
const PORT = process.env.PORT;
const app = express();
const FruitRouter = require('./controller/controller');
const UserRouter = require('./controller/userController')

//////////////////////////////////////
////////////MIDDLEWARE////////////////
//////////////////////////////////////
app.use(morgan('tiny'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true}));
app.use('/fruit', FruitRouter)
app.use('/user', UserRouter)
//////////////////////////////////////
//////////////ROUTES//////////////////
//////////////////////////////////////

app.get('/test', (req,res)=>{
    res.send('<h1>hello<h1>')
})












//////////////////////////////////////
//////////////LISTNER/////////////////
//////////////////////////////////////
app.listen(PORT,()=>{
    console.log(`Now listening on port ${process.env.PORT}`)
})