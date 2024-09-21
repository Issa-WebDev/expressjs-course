import express from "express";
const app = express();

const PORT = 2000;

// String Pattern Path
app.get("/ab?cd", (req, res) => {
  res.send("<h1>If the user hit (acd) or (abcd) then this will run.</h1>");
});

app.listen(PORT, () => console.log("Server up!"));
