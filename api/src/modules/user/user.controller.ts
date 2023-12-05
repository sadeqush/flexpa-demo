import { Request, Response } from "express";
import { LoginBody } from "./user.schema";
import { loginUser } from "./user.service";

export async function loginHandler(
  req: Request<{}, {}, LoginBody>,
  res: Response
) {
  try {
    let jwt = await loginUser(req.body.username, req.body.password);

    if (!jwt)
      return res.status(403).json({ status: 403, message: "Failed to Login" });

    return res.json({ jwt: jwt });
  } catch (e) {
    return res
      .status(500)
      .json({ status: 500, message: "Server error when processing request" });
  }
}
