const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = 3000;
const fs = require("fs");
app.use(bodyParser.urlencoded({ extended: false }));

// 1. Express :
// - là 1 framework được xây dựng dựa trên nề n tảng NodeJS
// - Express giúp dễ dàng SD các hàm có sẵn để viết API dễ dàng hơn
// - Express hoạt động nhanh, câu lệnh ngắn gọn

// 2. Routing trong Express
// Cấu trúc: app.[GET, POST, DELETE, PATCH]('/route', () => {
//     logic code
// })
//   console.log(req.query);
//   query: domain/users?=key1=value1&key2=value2&...
//   console.log(req.params);
//   params: domain/users/id||name||...

const dataUser = {
  users: [
    {
      name: "Nam",
      address: "Tòa nhà Sông Đà",
      phone: "012345678",
    },
    {
      name: "Hà",
      address: "tokyo",
      phone: "012345678",
    },
    {
      name: "Giang",
      address: "Hà lội",
      phone: "012345678",
    },
  ],
};
app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});
app.get("/products", (req, res) => {
  const dataUsers = JSON.parse(fs.readFileSync("./data.json", "utf8"));
  console.log(dataUsers);
  res.send(dataUsers);
});
app.get("/product-detail", (req, res) => {
  res.send("<h1>Đây là product detail</h1>");
});
app.get("/json", (req, res) => {
  res.json(users);
});
app.post("/product", (req, res) => {
  const data = req.body;
  dataUser.users.push(data);
  res.send(dataUser);
  console.log(req.body);
});

// Bài tập: tạo 1 file data.json chứa data user như trên:
// SD mothod POST => log data xem
// khi đọc đc data từ req.body => SD writeFile hoặc writeFileSync để thêm dữ liệu file data.json

app.post("/user", (req, res) => {
  const dataUsers = JSON.parse(fs.readFileSync("./data.json", "utf8"));
  //   console.log(dataUsers);
  const data = req.body;
  dataUsers.users.push(data);
  fs.writeFileSync("./data.json", JSON.stringify(dataUsers));
  res.send({ mesenge: "successs" });
  console.log(dataUsers);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
