const http = require("http");
const fs = require('fs');
const rutas = require('./rutas');

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    rutas(req, res);
  })
  .listen(3030, "localhost", () => console.log("Server running in 3030 port"));
