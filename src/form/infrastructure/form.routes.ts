import { Router } from "express"

import { validateCreate, FormController } from "@form/infrastructure"

const router = Router()

// Routes
router.post("/", validateCreate, FormController.createForm)


export default router