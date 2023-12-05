import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { JWT_SECRET } from "../config";

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accessToken = (req.headers.authorization || "").replace(
    /^Bearer\s/,
    ""
  );

  try {
    let decodedToken = verify(accessToken, JWT_SECRET);

    //@ts-ignore
    res.locals.user = decodedToken?.user;
    next();
  } catch (e) {
    return res.status(401).json({ error: "Unable to authenticate user" });
  }
};
