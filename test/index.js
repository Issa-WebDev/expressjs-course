import express from "express";
import router from "./routes/index.js";
const app = express();
const port = 1000;

app.use("/site/users", router);

app.listen(port, () => console.log(`server is up on http://localhost:${port}`));
