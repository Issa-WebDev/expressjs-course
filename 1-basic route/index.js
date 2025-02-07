import express from "express";
import { users } from "../index.js";
const app = express();

const PORT = 1000;

app.get("/", (req, res) => {
  res.send("HOME PAGE");
  res.writeHead(200, "OK", { "Content-Type": "text/html" });
});

app.get("/about", (req, res) => {
  res.send("ABOUT PAGE");
  res.writeHead(200, "OK", { "Content-Type": "text/html" });
});

app.get("/contact", (req, res) => {
  res.send("CONTACT PAGE");
  res.writeHead(200, "OK", { "Content-Type": "text/html" });
});

app.get("/users", (req, res) => {
  res.json(users);
  res.writeHead(200, "OK", { "Content-Type": "application/js" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
