const http = require(`http`);
const fs = require("fs");
const { error } = require("console");

const server = http.createServer((rep, res) => {
  //   Cấu trúc:  fs.readFileSync(file, charset, (err, data) => {});
  // - file: file muốn đọc
  // - charset: utf8 hoặc 1 mã phiên dịch khác
  // - callback function

  // const dataText = fs.readFileSync("./txt/read-this.txt", "utf8");

  // Cấu trúc : fs.writeFileSync(file, data, option);
  // - file: đường dẫn đến file cần ghi
  // - data: data muốn ghi vào file
  // - option: charset: utf8

  // const dataInput = "data input";
  // const dataAppend = "data append";
  // const finalData = dataInput + "\n" + dataAppend;

  // fs.writeFileSync("./txt/final.txt", finalData);
  // console.log("success");

  // const readFinal = fs.readFileSync("./txt/final.txt", "utf8");
  // console.log(readFinal);
  // res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  // res.write(readFinal);
  // res.end();

  // Thuc hanh 2

  const returnData = (error, data) => {
    console.log(error);
    console.log(data);
  };
  const dataFinal = fs.readFile("./txt/final.txt", "utf8", returnData);
  const dataFolder = fs.readFile("./txt/folder.txt", "utf8", returnData);
});

server.listen(3000, "127.0.0.1", function () {
  console.log(`listening on port`);
});
