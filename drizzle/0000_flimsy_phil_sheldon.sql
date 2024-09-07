CREATE TABLE IF NOT EXISTS "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(40) NOT NULL,
	"images" text[] NOT NULL,
	"brand" varchar(30) DEFAULT 'generic' NOT NULL,
	"price" integer NOT NULL,
	"category" varchar(25) NOT NULL,
	"sizes" varchar(10)[] NOT NULL,
	"colors" text[] NOT NULL,
	"stock" json NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"updated_at" timestamp DEFAULT CURRENT_TIMESTAMP
);
