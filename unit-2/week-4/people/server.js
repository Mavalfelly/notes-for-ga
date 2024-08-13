//////////////////////////////////////////////
////////           CONSTANTS          //////// 
//////////////////////////////////////////////
require('dotenv').config();
const express = require('express');
const People = require('./models/people')
const methodOverride = require('method-override')
const app = express();
//////////////////////////////////////////////
////////      Middles: Section        //////// 
//////////////////////////////////////////////
app.use(express.json());// this middleware allows us to send JSON in our request body any static files comes from this folder. 
app.use(express.static('public'));// like images and css files
app.use(express.urlencoded({ extended: true })); //read form data from our forms
app.use(methodOverride('_method'));// activates method override

//////////////////////////////////////////////
////////          ROUTES              //////// 
//////////////////////////////////////////////

app.get('/person',async(req,res)=>{
    try{
        let people = await People.find({});
        res.render('landing.ejs',{people:people});
    }catch(err){
        res.status(400).json(err);
    }
    
});
app.get('/person/new',async(req,res)=>{
        res.render('new.ejs')
})

app.post('/people', async(req,res)=>{
    await People.create(req.body)
    res.render('landing.js')
})



/*  <ul>
        <% for(person of people) {%>
            
            <li><%=person.name%></li>
            <%}%>
    </ul>
*/



//////////////////////////////////////////////
////////           PORTING            //////// 
//////////////////////////////////////////////
const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`listening on ${port} `)
})
