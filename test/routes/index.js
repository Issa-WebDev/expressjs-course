import express from "express";
const router = express.Router();
import {
  allUsers,
  createUsers,
  updateUsers,
  deleteUsers,
} from "../controllers/index.js";

router.get("/all", allUsers);

router.post("/create", createUsers);

router.put("/update", updateUsers);

router.delete("/delete", deleteUsers);

export default router;
