let http = require("http");
var fs = require("fs");
http
  .createServer(function(req, res) {
    if (req.url == "/") a = "/client/src/views/index.html";
    else a = req.url;
    fs.readFile(__dirname + a, function(err, data) {
      switch (req.url.split(".")[1]) {
        case "css":
          obj = { "Content-Type": "text/css" };
          break;
        case "js":
          obj = { "Content-Type": "text/javascript" };
          break;
        default:
          obj = { "Content-Type": "text/html" };
      }
      console.log(obj);
      res.writeHead(200, obj);
      res.write(data);
      res.end();
    });
  })
  .listen(8080);
