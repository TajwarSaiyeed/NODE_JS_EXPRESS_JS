const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("hello programmner\n");
    res.write("Nice program");
    res.end();
  } else if (req.url === "/about") {
    res.write("about page");
    res.end();
  } else {
    res.write("404 page not found");
    res.end();
  }
});

// optional
// server.on("connection", (socket) => {
//   console.log("new connection...");
// });

server.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
