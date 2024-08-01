const express = require('express');
const app = express();

/*
Ejs is a templating tool that allows us to send html pages to the client. WHY EJS you ask? this is because a templating tool bridges the gap between front end and backend.
For example if we have a variable on the backend (the server) with a template tool like EJS, we can send that information to the front end.
on top of the express setup. lets install ejs
npm install ejs in our terminals

So lets create a folder called views in our express app
*/

//**************************//
//Routes
//**************************//
//rendering ejs
app.get('/',(req,res) => {
    res.render('pages/home.ejs')// express knows to look in the veiws folder
})

app.get('/blueberry',(req,res) => {
    res.render('blueberry.ejs',{color: 'blue'})//color us key/property. anything after colon is value

})
//you do
app.get('/fruits',(req,res) => {
    res.render('fruits.ejs',{fruits: ['raspberries', ' pineapple', ' grapes']})//Sending an array will not space automatically. need to add a space at begining of each new one
})
app.get('/fruit',(req,res) => {
    res.render('fruit.ejs',{fruits: ['raspberries', ' pineapple', ' grapes']})
})
app.get('/instructors',(req,res) => {
    res.render('instructors.ejs',{instructors: [' davids', ' dennis', ' kyle', ' alex',' joy']})
})
//res.send is strings
//res.json sends json
//res.render sends html
app.get('/hometwo',(req,res) => {
    res.render('home2.ejs',
        {
            msg: 'hello squids',
            player: {
                name: 'matt'
            }
        })
})
app.get('/homethree',(req,res) => {
    res.render('home3.ejs',
        {
            names: ['david','joy','matt' ]
        })
})


//SQUIDS
//<%= when we need a particular value
//<% runs js. each line of js needs one. even if in an object
//both end in %>

//----------------------------------------------------------------------//
//PARTIALS

//HOW WE PUT IN REPEATED HTML CODE SEE EJS FILES
//DRY
//DON'T
//REPEAT
//YOURSELF

app.get('/part',(req,res) => {
    res.render('partials/part.ejs')
})
app.get('/pat',(req,res) => {
    res.render('partials//pat.ejs')
})
app.get('/gat',(req,res) => {
    res.render('partials//gat.ejs')
})






































//**************************//
//LISTENER
//**************************//
app.listen(3000, () => {
    console.log('hello world');
})