import express from "express";
import router from "./routes/index.js";

const app = express();
const port = 1001;

app.use("/users", router);


app.listen(port, () => console.log("server up"));
