import argon2 from "argon2";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function createUser(username: string, password: string) {
  try {
    const hashedPassword = await argon2.hash(password);
    let user = await prisma.user.create({
      data: {
        username: username,
        password: hashedPassword,
      },
    });
    if (user) return true;
    return false;
  } catch (e) {
    console.log(e);
    throw e;
  }
}

createUser("admin", "password")
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
