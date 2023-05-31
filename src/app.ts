import express, { json, Router } from "express"
import cors from "cors"
import morgan from "morgan"

const app = express()
const router = Router()

// Middlewares
app.use(json())
app.use(cors())
app.use(morgan("tiny"))

// Routes
router.get("/", (req, res) => {
    res.send("¡Bienvenido a la API de simple-form")
})

app.use("/v1", router)

export default app