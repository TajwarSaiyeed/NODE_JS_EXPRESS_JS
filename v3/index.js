// const fs = require("fs");

// const ourReadSteam = fs.createReadStream(`${__dirname}/bigdata.txt`, "utf-8");

// ourReadSteam.on("data", (data) => {
//   console.log("data");
// });

// console.log("hello");

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(`<html><head></head></head>`);
    res.write(
      `<body><form action="/process" method="POST"><input name="message" /></form></body>`
    );
    res.end();
  } else if (req.url === "/process" && req.method === "POST") {
    const body = [];
    req.on("data", (chank) => {
      body.push(chank);
    });

    req.on("end", () => {
      console.log("Stream Finished");
      const parseBody = Buffer.concat(body).toString();
      console.log(parseBody.split("+").join(" "));
    });
    res.write("Thank you for submitting");
    res.end();
  } else {
    res.write("404 page not found");
    res.end();
  }
});

server.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
