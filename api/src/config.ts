import { config } from "dotenv";
config();

export const FLEXPA_SECRET_KEY = process.env.FLEXPA_SECRET_KEY || "";
export const DATABASE_CONN_URL = process.env.DATABASE_CONNECTION_STRING || "";
export const APP_PORT = 5001;
export const JWT_SECRET = process.env.JWT_SECRET || "";
export const FLEXPA_BASE_URL = process.env.FLEXPA_PUBLIC_API_BASE_URL || "";
