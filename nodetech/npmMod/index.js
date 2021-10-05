const chalk = require("chalk");
const validator = require("validator");

console.log(chalk.blue.inverse("Hello World"));
console.log(chalk.green.inverse("Success"));
console.log(chalk.red.inverse("Fail"));

//isMobile, isURL, etc. 
const res = validator.isEmail("prahlad.is18@bmsce.ac.in");
console.log(res);
console.log(res ? chalk.green.inverse(res) :chalk.red.inverse(res));