import "reflect-metadata"
import { config } from "dotenv"
config()

import { initDatabase } from "@/database"

import app from "@/app"

const PORT = process.env.PORT || 3000

const start = async () => {
    try {
        await initDatabase()

        app.listen(PORT)
        console.log("Server on port", PORT)
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message)
        }
    }
}

start()