import { pgTable, text, timestamp, primaryKey } from "drizzle-orm/pg-core";

export const ProductsModel = pgTable("products", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  variantTitles: text("variant_titles").array(),
  tags: text("tags").array(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
  skus: text("skus").array(),
});
