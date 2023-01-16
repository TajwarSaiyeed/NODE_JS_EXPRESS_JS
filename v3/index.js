const fs = require("fs");

const ourReadSteam = fs.createReadStream(`${__dirname}/bigdata.txt`, "utf-8");

ourReadSteam.on("data", (data) => {
  console.log("data");
});

console.log("hello");
