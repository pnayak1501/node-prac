const fs = require('fs');

// fs.readFile('file.txt', 'utf-8', (err, data)=>{
//   console.log(err, data);
// })

// const a = fs.readFileSync('file.txt', 'utf-8');
// console.log(a);

// fs.writeFile('file2.txt', "This is a data", ()=>{
//   console.log("Written to the file");
// })

b = fs.writeFileSync('file2.txt', "File 2 content")
console.log(b)
console.log("Finished reading file");