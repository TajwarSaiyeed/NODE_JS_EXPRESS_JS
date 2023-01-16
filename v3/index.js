const fs = require("fs");

const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);

// ourReadStream.on("data", (data) => {
//   ourWriteStream.write(data);
// });

ourReadStream.pipe(ourWriteStream);

// console.log("hello");
