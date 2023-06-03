import { DataSource } from "typeorm"

import { FormEntity } from "@form/infrastructure"

const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: 5432,
    database: process.env.DB_NAME,
    synchronize: true,
    entities: [
        FormEntity
    ],
    ssl: process.env.ENV === "prod",
})

export const initDatabase = async () => {
    try {
        await AppDataSource.initialize()
        console.log("Connected to the database")
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(`Error on connecting to the database: ${err.message}`)
        }
        
    }
}