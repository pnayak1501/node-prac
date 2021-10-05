const fs = require('fs');

const bioData = {
  name : "Prahlad",
  age : 20,
  college : "BMS COLLEGE OF ENGINEERING"
};

// 1.Convert to JSON
// 2.Save it in another file
// 3.readFile
// 4.again convert back to js object
// 5.console.log

const jsonData = JSON.stringify(bioData);
fs.writeFile('json1.json', jsonData, (err)=>{
    console.log("DONE");
});

fs.readFile("json1.json", "UTF-8", (err, data)=>{
    // console.log(data);
    const orgData = JSON.parse(data);
    console.log(data);
    console.log(orgData);
});