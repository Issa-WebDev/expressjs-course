import express from "express";
const app = express();
const port = 1000;

// app.get("/student", (raq, res) => {
//   res.send("<h1> All students </h1>");
// });

// app.post("/student", (raq, res) => {
//   res.send("<h1> Add students </h1>");
// });

// app.put("/student", (raq, res) => {
//   res.send("<h1> Update students </h1>");
// });

// app.delete("/student", (raq, res) => {
//   res.send("<h1> Delete students </h1>");
// });

// refactor with route() function
app
  .route("/student")
  .get((req, res) => res.send("All students"))
  .post((req, res) => res.send("Add students"))
  .put((req, res) => res.send("Update students"))
  .delete((req, res) => res.send("Delete students"));

app.listen(port, () => console.log("server up http://localhost:" + port));
