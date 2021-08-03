const http = require("http");
const fs = require('fs');

http
  .createServer(function (req, res) {
    const url = req.url;
    if (req.method === "GET") {
      console.log(`.${url}.json`);
      fs.readFile(`.${url}.json`, function (err, data) {
        if (err) {
          throw err;
        }
        res.writeHead(200, { "Content-Type": "application-json" });
        res.write(data.toString());
        return res.end();
      });
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
