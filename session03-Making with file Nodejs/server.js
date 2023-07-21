const http = require("http");
const fs = require("fs");
const port = 3000;
const nodeStatic = require("node-static");
const file = new nodeStatic.Server("./public");

const server = http.createServer((req, res) => {
  // file.serve(req, res);
  // tạo 3 file txt trong folder content
  // fs.writeFileSync("./txt/firstData.txt", "this is first data");
  // fs.writeFileSync("./txt/midData.txt", "this is mid data");
  // fs.writeFileSync("./txt/lastData.txt", "this is last data");

  // 2 Đọc dữ liệu từ 3 file

  const firstData = fs.readFileSync("./txt/firstData.txt", "utf8");
  // const midData = fs.readFileSync("./txt/midData.txt", "utf8");
  // const lastData = fs.readFileSync("./txt/lastData.txt", "utf8");
  // console.log(firstData, "firstdata");

  // 3 Ghi dữ liệu từ 3 file vào 1 file mới là finalData

  // const finalData = `${firstData} + ${midData} + ${lastData}`;
  // console.log(finalData);
  // fs.writeFileSync("./txt/finalData.txt", finalData);
  // console.log("created finaldata");

  let readContentHTML = fs.readFileSync("./view/content.html", "utf8");
  // console.log(readContentHTML);
  res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
  res.write(readContentHTML);
  res.end();
  // console.log(firstData);
  // Update thêm string = talking about Product và lưu lại

  let newData = "talking Product";
  let newFirstData = `${firstData}  ${newData}`;
  fs.writeFileSync("./txt/firstData.txt", newFirstData);
});

server.listen(port, () => {
  console.log(`app listen on: http://localhost:${port}`);
});
