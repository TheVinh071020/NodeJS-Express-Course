const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
// Bài 1
// Bài 2
// app.get("/", (req, res) => {
//   res.send("<h1>This is homepage</h1>");
// });
// app.get("/overview", (req, res) => {
//   res.send("<h1>This is overview page</h1>");
// });
// app.get("/product", (req, res) => {
//   res.send("<h1>This is product page</h1>");
// });
// app.get("/*", (req, res) => {
//   res.send("<h1>404 - PAGE NOT FOUND</h1>");
// });

// Bài 3
// b1
app.get("/api/v1/users", (req, res) => {
  const users = JSON.parse(fs.readFileSync("./users.json", "utf8"));
  console.log(users);
  res.status(200).json(users);
});
// b2
app.get("/api/v1/users/:id", (req, res) => {
  const idUser = req.params.id;
  //   console.log(idUser);
  const users = JSON.parse(fs.readFileSync("./users.json", "utf8"));
  const findIdUser = users.find((user) => user.id == idUser);
  if (findIdUser) {
    res.status(200).json("success");
  } else {
    res.status(500).json("not found");
  }
  //   console.log(findIdUser);
});

// B3

app.post("/api/v1/users", (req, res) => {
  const users = JSON.parse(fs.readFileSync("./users.json", "utf8"));
  console.log(users);
  const emailUser = req.body;
  console.log(emailUser, "mail");
  const findEmail = users.find((user) => user.email == emailUser.email);

  if (!findEmail) {
    users.push(emailUser);
    fs.writeFileSync("./users.json", JSON.stringify(users));
    res.status(200).json("success");
  } else {
    res.status(500).json("not found");
  }
  console.log(findEmail);
});

// b4

app.put("/api/v1/users/:id", (req, res) => {
  const userId = req.params.id;
  const newUser = req.doby;
  fs.readFile("./users.json", "utf8");
});

// b5
app.delete("/api/v1/users/:id", (req, res) => {
  let dataUSer = JSON.parse(fs.readFileSync("./users.json", "utf-8"));
  let userIdDelete = req.params.id;
  let updatedUsers = dataUSer.filter((user) => user.id != userIdDelete);

  if (updatedUsers.length == dataUSer.length) {
    res.status(404).json({ message: "User not found" });
  } else {
    fs.writeFileSync("./users.json", JSON.stringify(updatedUsers), "utf-8");
    res.status(200).json({ message: "User deleted successfully" });
  }
  console.log(updatedUsers);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
