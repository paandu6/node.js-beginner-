const express = require('express')
const path= require('path')
const adminrouter=express.Router()

adminrouter.get("/addproduct",(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','addproduct.html'))
})
adminrouter.post("/addproduct",(req,res,next)=>{
    console.log(req.body);
    res.redirect('/welcomepage');
})


module.exports = adminrouter;