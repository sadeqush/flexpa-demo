import { Router } from "express";
import { loginHandler } from "./user.controller";
import { validate } from "../../middlewares/validate.middleware";
import { loginSchema } from "./user.schema";

export const UserRouter = Router();

UserRouter.post("/login", validate(loginSchema), loginHandler);
