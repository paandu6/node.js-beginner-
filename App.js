
const express = require('express')

const adminRouter=require('./routes/admin')
const shoproutes =require('./routes/shop')
const loginroutes =require('./routes/login')
const messageroutes =require('./routes/message')
const bodyParser = require('body-parser')
const app=express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.urlencoded({extended:false}))


app.use(adminRouter)
app.use(shoproutes)
app.use(loginroutes)
app.use(messageroutes)
app.use((req,res,next)=>{
    res.send('<h1>Something went wrong</h1>')
})

// const server=http.createServer(app)

// server.listen(4000)
app.listen(4000)


 