let jsonString = require("./temp.json");
let http = require("http");

http
  .createServer(function (req, res) {
    const url = req.url;
    if (req.method === "GET") {
      if (url === "/rahul") {
        res.writeHead(200, { "Content-Type": "application-json" });
        res.write(JSON.stringify(jsonString));
        return res.end();
      }
    } else if (req.method === "POST") {
      let content = "";
      req.on("data", (chunk) => {
        content += chunk;
      });
      res.writeHead(200, { "Content-Type": "application-json" });
      res.write(JSON.stringify(content));
      req.on("end", () => {
        return res.end();
      });
    }
  })
  .listen(8080);
