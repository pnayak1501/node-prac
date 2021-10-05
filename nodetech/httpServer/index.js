const http = require("http");

//Creating a server
const server = http.createServer((req, res) =>{
    // console.log(req.url);
    if(req.url == "/"){
      res.end('Hello guys!');
    }else if(req.url == "/about"){
      res.end("About page");
    }else if(req.url == "/contact"){
      res.write("Contact page");
      res.end();
    }else{
      res.writeHead(404, {"Content-type":"text/html"});
      res.end("<h1>404 error page. Page dosent exist</h1>");
    }
});

server.listen(8000, "127.0.0.1", ()=>{
    console.log("Listening to the port no 8000");
});