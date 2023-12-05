import express, { Request, Response } from "express";
import cors from "cors";
import { PatientRoute } from "./modules/patient/patient.route";
import { UserRouter } from "./modules/user/user.route";

export const app = express();

//Express configurations
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Health check
app.get("/ping", (req: Request, res: Response) => {
  return res.status(200).send("Yeah, I am healthy.");
});

app.use(PatientRoute);
app.use(UserRouter);
