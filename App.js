
const express = require('express')

const bodyParser = require('body-parser')

const app=express()

app.use(bodyParser.urlencoded({extended:false}))


app.use("/addproduct",(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="product"><button type="submit">add product</button></form>')
})
app.use("/product",(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})

app.use('/',(req,res,next)=>{
    res.send('<h1>hello from express js</h1>')
})
// const server=http.createServer(app)

// server.listen(4000)
app.listen(4000)


 