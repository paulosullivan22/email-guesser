import { Request, Response, NextFunction, RequestHandler } from 'express';
import HttpStatus from 'http-status-codes'

import schema from './schema'

const createValidationMiddleware: () => RequestHandler = () => {
    return async function handleRequest(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        if (req.body && Object.keys(req.body).length > 0) {
            const validationResult = schema.validate(req.body)

            if (validationResult.error) {
                res.status(HttpStatus.BAD_REQUEST).send(validationResult.error.details[0].message)
                return
            }
        }

        next();
    };
}

export default createValidationMiddleware;
