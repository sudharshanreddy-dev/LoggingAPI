import { Request, Response, NextFunction, RequestHandler } from "express";
import { ZodSchema } from "zod";

export const validate = (schema: ZodSchema<any>): RequestHandler => {
    return (req: Request, res: Response, next: NextFunction): void => {
        const result = schema.safeParse(req.body);

        if (!result.success) {
            const errorMessage = result.error.errors[0]?.message || "Invalid request data";
            res.status(400).json({ message: errorMessage });
            return;
        }
        req.body = result.data;
        next();
    };
};
