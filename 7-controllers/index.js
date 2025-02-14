import express from "express";
import studentsRouter from "./routes/index.js";
const app = express();
const port = 1001;

app.use("/students", studentsRouter);

app.listen(port);
