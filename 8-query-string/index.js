import express from "express";
const app = express();
const port = 1001;

// query string
app.get("/product/:id", (req, res) => {
  const { category, pname } = req.query;
  const { id } = req.params;
  res.send(`<h1>Response OK ${category} ==> (${pname}) ==> ID:${id}</h1>`);
});

app.listen(port);
