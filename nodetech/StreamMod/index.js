const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on('request',  (req, res) => {
  // NORMAL METHOD
    // fs.readFile("input.txt", (err, data)=>{
    //   res.end(data.toString());
    // });

  // STREAM WAY
    // const rstream = fs.createReadStream("input.txt");
    // rstream.on('data', (chunkData)=>{
    //     res.write(chunkData);
    // });
    // rstream.on('end', ()=>{
    //     res.end();
    // });
    // rstream.on('error', (err)=>{
    //     console.log(err);
    //     res.end("File not found");
    // });

    // THIRD WAY
    const rstream = fs.createReadStream("input.txt");
    rstream.pipe(res);
});

server.listen(8000, "127.0.0.1");