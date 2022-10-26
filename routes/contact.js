const express = require('express')
const path = require('path')
const contactroute=express.Router()

contactroute.get("/contact",(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','contact.html'))
})
contactroute.post('/contact',(req,res,next)=>{
    res.redirect('/sucess')
})

module.exports=contactroute;