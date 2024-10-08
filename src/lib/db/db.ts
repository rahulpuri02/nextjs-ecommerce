import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import config from "../config";

const queryString = config.database.databaseUrl as string;
export const connection = postgres(queryString);
export const db = drizzle(connection);
