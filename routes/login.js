const express = require('express')
const fs=require('fs')
const loginroutes=express.Router()


loginroutes.get('/',(req,res,next)=>{
    fs.readFile('username.txt',(err,data)=>{
        if(err){
            data="no messages avlb"
        }
    res.send(`<form  method='POST' action='/' onsubmit='document.getElementById('username').value=localStorage.getItem('username')'>
    <input type='text' id='message' name='message' placeholder='message'>
    <input  name='username' type="hidden" id='username'>
    <button type='submit'> Send Message</button>
    <p>${data}</p>
    </form>`)
    })
    
})
loginroutes.post('/',(req,res,next)=>{
    console.log(req.body.username)
    console.log(req.body.message)
    fs.writeFile("username.txt",`${req.body.username}:${req.body.message}`,{flag:'a'} ,(err)=>{
        err ? console.log(err) : res.redirect('/')
    })
})

loginroutes.get("/login",(req,res,next)=>{
    res.send("<form action='/' method='POST' onsubmit='localStorage.setItem(`username`, document.getElementById(`username`).value)'> <input id='username' type='text' name='username' ><button type='submit'>enter your name</button></form>")
})
module.exports = loginroutes