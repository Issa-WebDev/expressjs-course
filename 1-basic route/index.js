// First Server with Express js 👇🏻
import express from "express";
const app = express();

const PORT = 1000;

// route
app.get("/", (req, res) => {
  res.send("<h1> HOME PAGES</h1>");
  res.writeHead(200, "OK", { "Content-Type": "text/html" });
});

app.get("/about", (req, res) => {
  res.send("<h1>ABOUT PAGES</h1>");
  res.writeHead(200, "OK", { "Content-Type": "text/html" });
});


app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
