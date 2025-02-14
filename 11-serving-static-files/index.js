import express from "express";
import path from "path";
const app = express();
const port = 1001;

app.use(express.static("./public"));

app.get("/", (req, res) => {
  // const pages = path.resolve(__dirname, "./public/index.html");
  const pages = path.join(process.cwd(), "./public/index.html");
  res.sendFile(pages);
});

app.listen(port);
