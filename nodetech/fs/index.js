const fs = require("fs");

// Creating a new file
// fs.writeFileSync("read.txt", "Welcome to my channel");
// fs.writeFileSync("read.txt", "Prahlad Welcome");

//Appending in a file
fs.appendFileSync("read.txt", " Welcome back! \n");

const buf_data = fs.readFileSync("read.txt");
const org_data = buf_data.toString();
console.log(org_data);

// Rename a file 
fs.renameSync("read.txt", "readwrite.txt");