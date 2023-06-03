import { Request, Response, NextFunction } from "express"
import { check } from "express-validator"

import { validateEntity } from "@common/infrastructure"

export const validateCreate = [
    check("fullname")
        .exists()
        .withMessage("El nombre es requerido")
        .notEmpty()
        .withMessage("El nombre no debe ir vacío")
        .isLength({ min: 2, max: 50 })
        .withMessage("El nombre debe ser entre 2-50 caracteres")
        .custom(value => /^([a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+\s?)+$/.test(value))
        .withMessage("Debe ingresar un nombre válido"),

    check("country")
        .exists()
        .withMessage("El país es requerido")
        .notEmpty()
        .withMessage("El país no debe ir vacío")
        .isLength({ min: 4, max: 30 })
        .withMessage("El país debe ser entre 4-30 caracteres"), 


    (req: Request, res: Response, next: NextFunction) => {
        validateEntity(req, res, next)
    }
]

