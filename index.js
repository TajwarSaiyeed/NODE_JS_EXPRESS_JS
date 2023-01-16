// const _ = require("lodash");
// path module
const path = require("path");
// os module
const os = require("os");
// fs module
const fs = require("fs");

const myPath = "D:/LWS_NODE_JS_EXPRESS_JS/index.js";
// console.log(path.basename(myPath));
// console.log(path.dirname(myPath));
// console.log(path.extname(myPath));

// console.log(os.platform());
// console.log(os.homedir());
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.cpus());

// write file
fs.writeFileSync("myFile.txt", "hello world \n");
// append file
fs.appendFileSync("myFile.txt", "hello programmers");

// read file
const data = fs.readFileSync("myFile.txt", "utf-8");
// console.log(data);

// data2 file
fs.writeFileSync("myFile2.txt", "file 2");

// read file // buffer
const data2 = fs.readFileSync("myFile2.txt");
// console.log(data2.toString());

// asyce way
const data3 = fs.readFile("myFile2.txt", (err, data) => {
  if (err) throw err;
  // console.log(data.toString());
});
