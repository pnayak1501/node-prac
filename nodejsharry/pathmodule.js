const path = require('path');

const a1 = path.basename('C:\\temp\\myFile.html');
const a2 = path.dirname('C:\\temp\\myFile.html');
console.log(a1);
console.log(a2);
console.log(path.extname(__filename));