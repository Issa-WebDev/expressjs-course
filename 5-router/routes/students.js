import express from "express";
const router = express.Router();

router.get("/all", (req, res) => {
  res.send("<h1> All Students </h1>");
});

router.post("/create", (req, res) => {
  res.send("<h1> Create new Students </h1>");
});

router.put("/update", (req, res) => {
  res.send("<h1> Update a students</h1>");
});

router.delete("/delete", (req, res) => {
  res.send("<h1>Remove students from db</h1>");
});

export default router;
