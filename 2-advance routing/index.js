import express from "express";
const app = express();

const PORT = 1000;

app.get("/abv?cde", (req, res) => {
  res.send("<h1>Home pages🏠🏠</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>CONATCT PAGES</h1>");
});

app.listen(PORT, () => console.log(`Server Up and listen on port ${PORT}`));
