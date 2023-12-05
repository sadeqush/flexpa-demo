import { app } from "./app";
import { APP_PORT } from "./config";
import { prisma } from "./database";
import { createUser } from "./modules/user/user.service";

app.listen(APP_PORT, async () => {
  try {
    await prisma.$connect();
    console.log("Database connection has been established.");
  } catch (error) {
    //console.error("\x1b[31m Database connection could not be established.");
    console.log(error);
    process.exit();
  }

  console.log(`Server Running on http://localhost:${APP_PORT}`);
});
