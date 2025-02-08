import express from "express";
import { users } from "./userData.js";
const app = express();

const PORT = 1000;

// app.get("/av?cde", (req, res) => {
//   res.send("<h1>Home pages🏠🏠</h1>");
// });

// app.get(/a/, (req, res) => {
//   res.send("<h1>IF THE ROUTE INCLUDES (a) SHOW THIS PAGES</h1>");
// });

// app.get("/users", (req, res) => {
//   res.json(users);
// });

// // regex routing
// app.get(/^\/users\/[0-9]{4}$/, (req, res) => {
//   res.send("working");
// });

app.get("/products/phone", (req, res) => {
  res.end("<h1>This code will only run if you provide /product/phone</h1>");
});

app.listen(PORT, () => console.log(`Server Up and listen on port ${PORT}`));
