const fs = require('fs');

// fs.writeFile('readFile.txt', "Today is an awesome day!", (err)=>{
//     console.log("File is created!");
//     console.log(err);
// });

// fs.appendFile('readFile.txt', " Hello boys", (err)=>{
//     console.log('Task Completed!');
// })

fs.readFile("readFile.txt", "UTF-8", (err, data)=>{
    console.log(data);
    // console.log(data.toString());
});