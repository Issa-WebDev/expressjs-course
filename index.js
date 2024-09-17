import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to express.js");
});

app.listen(8100, () => console.log("Server up and rounning on the port 8100"));
