import express from "express";
import products from "./product.js";
const app = express();

app.get("/products", (req, res) => {
  res.send(products);
});

app.listen(1001);
