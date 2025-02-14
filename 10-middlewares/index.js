import express from "express";
import myMwares from "./middlewares/logs.js";
const app = express();

app.use(myMwares);

app.get("/users", (req, res) => {
  res.send("Welcome New Users");
});

app.get("/cool", (req, res) => {
  res.send("cool usesr");
});

app.listen(1001);
