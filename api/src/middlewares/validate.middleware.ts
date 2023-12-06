import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

//Function to validate request coming to the APIs
export const validate =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (error: any) {
      return res
        .status(400)
        .json({ status: 400, message: "Error processing request" });
    }
  };
