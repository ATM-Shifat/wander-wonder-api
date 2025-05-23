import express from "express"

import { registerUser, authenticateUser } from "../controllers/authController.js"

const router = express.Router()

router.post("/register", registerUser)
router.post("/login", authenticateUser)

export default router