import express from "express";
import students from "./routes/students.js";
const app = express();
const port = 1000;

app.use("/students", students);

app.listen(port, () => console.log("Server Up!"));
