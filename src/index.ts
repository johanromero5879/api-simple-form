import { config } from "dotenv"
config()

import app from "@/app"

const PORT = process.env.PORT || 3000

const start = async () => {
    try {
        app.listen(PORT)
        console.log("Server on port", PORT)
    } catch (error) {
        console.error(error)
    }
}

start()