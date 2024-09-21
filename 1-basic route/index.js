import express from "express";
const app = express();

const PORT = 2000;

// Basic Routing
app.get("/", (req, res) => {
  res.send("HOME");
});

app.get("/about", (req, res) => {
  res.send("ABOUT");
});

app.get("/contact", (req, res) => {
  res.send("CONTACT");
});

// listen my server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

// http Methods
// GET ==> Retrieve Data
// POST ==> Create / Insert Data
// PUT ==> Completely Updated Data
// PATCH ==> Partially Update Data
// DELETE ==> Delete Data
// ALL ==> Any HTTP Request
