import { Request, Response, NextFunction } from "express"
import { check } from "express-validator"

import { validateEntity } from "@common/infrastructure"

export const validateCreate = [
    check("fullname")
        .exists()
        .withMessage("El campo es requerido")
        .notEmpty()
        .withMessage("El campo no debe ir vacío")
        .isLength({ min: 2, max: 50 })
        .withMessage("El campo debe ser entre 2-50 caracteres"),

    check("country")
        .exists()
        .withMessage("El campo es requerido")
        .notEmpty()
        .withMessage("El campo no debe ir vacío")
        .isLength({ min: 4, max: 30 })
        .withMessage("El campo debe ser entre 4-30 caracteres"), 


    (req: Request, res: Response, next: NextFunction) => {
        validateEntity(req, res, next)
    }
]

