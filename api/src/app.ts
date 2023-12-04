import express, { Request, Response } from "express";
import { APP_PORT } from "./config";
import cors from "cors";

export const app = express();

//Express configurations
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: true }));

//Health check
app.get("/ping", (req: Request, res: Response) => {
  return res.status(200).send("Yeah, I am healthy.");
});
