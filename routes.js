const fs= require('fs')

const routesHandler=(req,res)=>{
    const url=req.url;
    if(url === '/'){

            res.write('<html>')
            res.write('<head><title>myn first server</title></head>')
            res.write('<body><form action="/message" method="POST"><input type="text" name="message" ><button type="submit">Send Message</button></form>')
            res.write('</body>')
            res.write('</html>')
            return res.end()
    }
    if(url === '/message' && req.method==='POST'){
        const body=[]
        req.on('data',(chunk)=>{
            console.log(chunk)
            body.push(chunk)
        })
        req.on('close',()=>{
            const parseBody= Buffer.concat(body).toString()
            const message=parseBody.split('=')[1];
            fs.writeFileSync('message.txt' ,message)
        })
        res.statusCode=302
        res.setHeader('Location', '/')
        return res.end()
    }

    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>myn first server</title></head>')
    res.write('<body><h1></h1></body>')
    res.write('</html>')
    res.end()
}


module.exports= routesHandler;