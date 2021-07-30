var jsonString = require("./temp.json")
var http = require("http");
var fs = require("fs");

// const jsonString = '{"name":"John", "age":30, "car":null}';
const server = http
  .createServer(function (req, res) {
    if (req.method === "GET") {
      res.writeHead(200, { "Content-Type": "application-json" });
        res.write(JSON.stringify(jsonString));
      return res.end();
    } else if (req.method === "POST") {
      var content = "";
      req.on("data", (chunk) => {
        content += chunk;
      });
      res.writeHead(200, { "Content-Type": "application-json" });
      res.write(JSON.stringify(content));
    //   console.log("HERE ...", res);
      req.on("end", () => {
        return res.end();
      });
    }
  })
  .listen(8080);
// server.close();
