const bioData = {
  name : "Prahlad",
  age : 20,
  college : "BMS COLLEGE OF ENGINEERING"
}

const jsonData = JSON.stringify(bioData);
console.log(jsonData);
console.log(jsonData.name);

const objData = JSON.parse(jsonData);
console.log(objData);
console.log(objData.name);