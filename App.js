
const express = require('express')
const rootDir=require('./utils/path')
const adminRouter=require('./routes/admin')
const shoproutes =require('./routes/shop')
const loginroutes =require('./routes/login')
const messageroutes =require('./routes/message')
const bodyParser = require('body-parser')
const contactroute = require('./routes/contact')
const path=require('path')
const app=express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static(path.join(rootDir,'public')))
app.use(adminRouter)
app.use(shoproutes)
app.use(loginroutes)
app.use(messageroutes)
app.use(contactroute)
app.use('/sucess',(req,res,next)=>{
    res.sendFile(path.join(__dirname, 'views', 'sucess.html'))
})
app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','404.html'))
})

// const server=http.createServer(app)

// server.listen(4000)
app.listen(4000)


 