const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');

router.get("/signup", (req, res) => {
    res.render("user/signup.ejs");
});
//saving data from the signup page 
router.post('/signup', async (req,res)=>{

    try{
         //logging the username and password that the person entered
        //console.log(req.body)z

        // bcrypt.hash is the actual hashing
        // await bcrypt(genSalt(10))); generate a salt(cost factor) higher is better but takes longer
        req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10));
        //once the hashing is complete we can create new user in the database
        await User.create(req.body);
        //redirecting
        res.redirect("/user/login")
    }catch(err){
        res.send(400).json(err)
    }

})


router.get("/login", (req, res) => {
    res.render("user/login.ejs");
});
router.post('/login', async (req,res)=>{
    try{
        //find a user from the user table usung the user name
        const user = await User.findOne({username: req.body.username});

        
        //if a user isnt  found
        if(!user){
            res.send('user doesnt exist')
        }else{
        // users found goes here
            //compare passwords
            const passwordMatch = bcrypt.compareSync(req.body.password, user.password)
            if(passwordMatch){
                console.log(req.session)
                req.session.username=req.body.username
                req.session.loggedIn = true;
                res.redirect("/fruit");
            }else {
                //if passwords dont match
                res.send("wrong Password Buster")
            }
        }
       
    }catch(err){
        res.status(400).json(err)//has to be send status or errors out
    }

})

router.get("/logout", (req, res) => {
    // destroy session and redirect to main page
    req.session.destroy((err) => {
        res.clearCookie()
        res.redirect("/user/login")
    })
})
module.exports = router;