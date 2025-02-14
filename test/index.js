import express from "express";
import path from "path";
const app = express();
const port = 1001;

app.use(express.static("./public"));

app.get("/", (req, res) => {
  const file = path.resolve(__dirname, "./public/index.html");
  res.sendDate(file);
});

app.listen(port);
