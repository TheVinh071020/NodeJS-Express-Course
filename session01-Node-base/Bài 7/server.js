const http = require("http");
const port = 3000;
const url = require("url");
const fs = require("fs");
const { log } = require("console");

const server = http.createServer((req, res) => {
  //   console.log(readOverView);

  const { query, pathname } = url.parse(req.url, true);
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  const readOverView = fs.readFileSync("./overview.html", "utf8");
  let readProduct = fs.readFileSync("./product.html", "utf8");
  const cartTemplate = fs.readFileSync("./card-template.html", "utf8");
  const dataJson = JSON.parse(fs.readFileSync("./data.json", "utf8"));
  const replaceProduct = pathname.split("/");
  const id = replaceProduct[replaceProduct.length - 1];

  if (pathname === "/" || pathname === "/overview") {
    console.log(id);
    const replaceData = dataJson.map((fruit) => {
      return cartTemplate
        .replace("{{image}}", fruit.image)
        .replace("{{productName}}", fruit.productName)
        .replace("{{quantity}}", fruit.quantity)
        .replace("{{price}}", fruit.price)
        .replace("{{id}}", fruit.id);
    });
    const renderOverView = readOverView.replace("{{cart}}", replaceData);

    res.write(renderOverView);
  } else if (pathname === `/product`) {
    res.write(readProduct);
  } else {
    const item = dataJson.find((item) => item.id == id);
    if (item) {
      console.log("kkkk");
      readProduct = readProduct
        .replace("{{productName}}", item.productName)
        .replace("{{organic}}", item.organic)
        .replace("{{image}}", item.image)
        .replace("{{from}}", item.from)
        .replace("{{nutrients}}", item.nutrients)
        .replace("{{quantity}}", item.quantity)
        .replace("{{price}}", item.price)
        .replace("{{description}}", item.description);
      res.write(readProduct);
    } else {
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      res.write("page not found");
    }
  }
  res.end();
});

server.listen(port, () => {
  console.log(`listening on port: http://localhost:${port}`);
});
