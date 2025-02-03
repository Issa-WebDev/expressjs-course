// import express from "express";
// const app = express();

// const PORT = 1000;

// app.get("/ab?cd", (req, res) => {
//   res.send("<h1>Home pages🏠🏠</h1>");
// });

// app.get("/contact", (req, res) => {
//   res.send("<h1>CONATCT PAGES</h1>");
// });

// app.listen(PORT, () => console.log(`Server Up and listen on port ${PORT}`));

import express from "express";
const app = express();
const PORT = 5000;

const produits = [
  { id: 1, name: "Ordinateur", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "AirPods", price: 100 },
];

app.use("/produits", (req, res) => {
  res.json(produits);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
