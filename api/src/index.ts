import { app } from "./app";
import { APP_PORT } from "./config";
import { prisma } from "./database";

app.listen(APP_PORT, async () => {
  try {
    await prisma.$connect();
    console.log("\x1b[32mDatabase connection has been established.");
  } catch (error) {
    console.error("\x1b[31m Database connection could not be established.");
    process.exit();
  }

  console.log(`\x1b[32mServer Running on http://localhost:${APP_PORT}`);
});
