import { sql } from "drizzle-orm";
import {
  integer,
  json,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 40 }).notNull(),
  images: text("images").array().notNull(),
  brand: varchar("brand", { length: 30 }).notNull().default("generic"),
  price: integer("price").notNull(),
  category: varchar("category", { length: 25 }).notNull(),
  sizes: varchar("sizes", { length: 10 }).array().notNull(),
  colors: text("colors").array().notNull(),
  stock: json("stock").notNull(),
  createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
  updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`),
});
