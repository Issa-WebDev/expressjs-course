import express from "express";
import allUserController from "../controllers/allUserController.js";
import getIDcontroller from "../controllers/getIDcontroller.js";
const router = express.Router();

router.get("/all", allUserController);
router.get("/all/:id", getIDcontroller);

export default router;
