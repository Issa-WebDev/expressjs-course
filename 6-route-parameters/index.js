import express from "express";
const app = express();
const port = 1001;

// route parameter (params)
// app.get("/product/:category/:id", (req, res) => {
//   const { category, id } = req.params;
//   res.send(`Category (${category})  and id (${id})`);
// });

// param function
app.param("id", (req, res, next, id) => {
  console.log(`id: ${id}`);
  next();
});

app.get("/products/:id", (req, res) => {
  console.log("this the product ID");
  res.send(`response OK`);
});

app.listen(port, () => console.log(`http://localhost:${port}`));
