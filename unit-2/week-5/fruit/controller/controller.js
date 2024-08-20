const express = require('express');
const router = express.Router();
const Fruits = require('../models/fruit')



router.get('/', async (req,res)=>{
    const fruits = await Fruits.find({});
    console.log(fruits)
    res.render('index.ejs',{fruits})
});
router.get('/new',(req,res)=>{
    res.render('new.ejs')
})
router.post('/', async (req,res)=>{
    req.body.readyToEat = req.body.readyToEat === 'on' ? true:false
    await Fruits.create(req.body);
    res.redirect('/fruit')
})
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const fruit = await Fruits.findById(id);
    res.render('edit.ejs', { fruit });
});
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    req.body.readyToEat = req.body.readyToEat === 'on' ? true:false
    const fruit = await Fruits.findByIdAndUpdate(id, req.body);
    res.redirect('/fruit')
});
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const fruit = await Fruits.findByIdAndDelete(id);
    res.redirect('/fruit')
});

module.exports = router