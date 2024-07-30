const express = require('express')
const port = 3000
const app = express()

app.get('/', (req, res) => {
    
    res.send(`<h1>hi</h1>`)
})

app.get('/:category',(req,res) => {
    const cat = req.params.category
    const sort = req.query.sort
    const limit = req.query.limit

    res.send( `Category: ${cat}, Sort by: ${sort}, Limit: ${limit}`)
})


//listen for requests
app.listen(3000, () => {
    console.log(`listening to port ${port}`)
})


