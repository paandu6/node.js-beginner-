const express = require('express')
const path=require('path')
const rootDir=require('../utils/path')
const shoprouter=express.Router()

shoprouter.get('/welcomepage',(req,res,next)=>{
    res.sendFile(path.join(rootDir, 'views', 'myshop.html'));
})

module.exports=shoprouter