import { Request, Response } from "express"

import { container } from "@/container"


export class FormController {
    static async createForm(req: Request, res: Response) {
        const { fullname, country } = req.body

        const form = await container.form.createForm({ fullname, country })
        
        // 201: Created
        res.status(201).json(form)
    }
}