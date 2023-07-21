const http = require("http");
const port = 3000;
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  res.writeHead(200, "Content-Type", "text/html ; charset=utf-8");
  const getForm = fs.readFileSync("./views/get-form.html", "utf8");
  const postForm = fs.readFileSync("./views/post-form.html", "utf8");
  res.write(postForm);

  const query = url.parse(req.url, true);
  let data;
  if (req.method === "POST") {
    res
      .on("error", (err) => {
        console.error(err);
      })
      .on("data", (chuck) => {
        data += chuck.toString("utf-8");
      })
      .on("end", (chuck) => {
        console.log(decodeURIComponent(data));
      });
  } else {
    console.log("aa");
  }
  res.end();
});

server.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
