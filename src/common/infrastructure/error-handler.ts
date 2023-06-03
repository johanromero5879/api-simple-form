import { Request, Response, NextFunction } from "express"
import { validationResult } from "express-validator"

export const validateEntity = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    
    if (errors.isEmpty()) {
        return next();
    }
    
    // 422: Unprocessable Entity
    return res.status(422).json({ errors: errors.array() });
}