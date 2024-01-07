const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('here is out short history')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We couldn't find the page</p>
    <a href="/">Back Home</a>
    `)
})

server.listen(5000)