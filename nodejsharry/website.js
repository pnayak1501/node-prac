const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(req.url == "/")
      res.end('<h1> This is Prahlad Nayak </h1>');
    else if(req.url == '/about')
      res.end('<h1> This is Nayak </h1>');
    else if(req.url == '/hello'){
      const data = fs.readFileSync('index.html');
      res.end(data.toString());
    }
    else{
      res.statusCode = 404;
      res.end('<h1> NOT FOUND ON THE SERVER </h1>');
    }
})

server.listen(port, ()=>{
  console.log(`Server is listening on ${port}`);
});