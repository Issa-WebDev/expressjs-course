import express from "express";
import ejs from "ejs";
import router from "./routes/index.js";
const app = express();
const port = 1001;

app.set("view engine", "ejs");
app.use("/site", router);

app.listen(port, () => console.log("server up!"));
