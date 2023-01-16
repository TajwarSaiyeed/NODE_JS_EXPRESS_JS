// const _ = require("lodash");
const path = require("path");
const os = require("os");

const myPath = "D:/LWS_NODE_JS_EXPRESS_JS/index.js";
console.log(path.basename(myPath));
console.log(path.dirname(myPath));
console.log(path.extname(myPath));

console.log(os.platform());
console.log(os.homedir());
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.cpus());
