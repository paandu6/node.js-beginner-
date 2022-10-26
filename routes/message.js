const express = require('express')
const { use } = require('./admin')

const messageroutes=express.Router()

messageroutes.post('/message',(req,res,next)=>{
    res.send("<form><input type='text' name='message'><button type='submit'> Send Message</button></form>")
})

module.exports=messageroutes