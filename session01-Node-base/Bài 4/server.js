const http = require("http");
const fs = require("fs");
const port = 3000;

const server = http.createServer((rep, res) => {
  // b1: Khởi tạo server
  // b2: tạo folder txt
  // b3: require fs vào và SD hàm fs.readFileSyc
  const readFinal = fs.readFileSync("./final.txt", "utf8");
  console.log(readFinal);
  // b4: in ra màn hình client
  res.writeHead(200, { "Content-Type": "text/html; charset=utf8" });
  res.write(readFinal);
  res.end();
});

server.listen(port, () => {
  console.log(`listening on port: http://localhost:${port}`);
});
