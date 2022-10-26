const express = require('express')

const adminrouter=express.Router()

adminrouter.get("/addproduct",(req,res,next)=>{
    res.send('<form action="/product"  method="POST"><input type="text" name="product"><button type="submit">add product</button></form>')
})
adminrouter.post("/product",(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})


module.exports = adminrouter;