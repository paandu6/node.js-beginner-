const express = require('express')

const shoprouter=express.Router()

shoprouter.get('/welcomepage',(req,res,next)=>{
    res.send('<h1>hello from express js</h1>')
})

module.exports=shoprouter