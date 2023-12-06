import { prisma } from "../../database";
import argon2 from "argon2";
import { sign } from "jsonwebtoken";
import { JWT_SECRET } from "../../config";

export async function loginUser(username: string, password: string) {
  try {
    let user = await prisma.user.findUnique({ where: { username: username } });
    if (!user) return false;
    const passwordMatched = await argon2.verify(user.password, password);
    if (!passwordMatched) return false;
    let jwtBody = {
      user: user.id,
    };
    let jwt = sign(jwtBody, JWT_SECRET);
    return jwt;
  } catch (e) {
    console.log(e);
    throw e;
  }
}
