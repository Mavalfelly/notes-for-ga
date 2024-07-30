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
    res.render('home.ejs')// express knows to look in the veiws folder
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






//**************************//
//LISTENER
//**************************//
app.listen(3000, () => {
    console.log('hello world');
})