import { sql } from "drizzle-orm";
import {
  index,
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
}, (table) => {
  return {
    categoryIdx: index('category_idx').on(table.category)
  }
});

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  firstName: varchar('first_name', { length: 100 }).notNull(),
  lastName: varchar('last_name', { length: 100 }).notNull(),
  email: varchar('email', { length: 100 }).unique().notNull(),
  provider: varchar('provider', { length: 20 }),
  externalId: varchar('external_id', { length: 100 }).notNull(),
  image: text('image'),
  role: varchar('role', { length: 12 }).notNull().default('customer'),
  updatedAt: timestamp('updated_at').default(sql`CURRENT_TIMESTAMP`),
  createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`),
});
