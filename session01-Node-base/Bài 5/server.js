const http = require("http");
const fs = require("fs");
const url = require("url");
const port = 4000;

const server = http.createServer((rep, res) => {
  const { query, pathname } = url.parse(rep.url, true);
  res.writeHead(200, { "Content-Type": "text/html" });

  if (pathname === "/") {
    res.write("<h1>This is homepage</h1>");
  } else if (pathname === "/overview") {
    res.write("<h1>This is overview page</h1>");
  } else if (pathname === "/product") {
    res.write("<h1>This is product page</h1>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write(" PAGE NOT FOUND");
  }
  res.end();
});

server.listen(port, () => {
  console.log(`listening on port: http://localhost:${port}`);
});
