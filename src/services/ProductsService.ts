import { neon, NeonQueryFunction } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { ProductsModel } from "../models/ProductsModel";
import { eq, getTableColumns } from "drizzle-orm";

const safeColumns = getTableColumns(ProductsModel);

/**
 * Get all products from the database
 */
export const getProducts = async (connectionString: string) => {
  const db = drizzle(neon(connectionString));
  return await db.select(safeColumns).from(ProductsModel);
};

/**
 * Insert product/products into the database
 * Supports inserting a single product or an array of products
 */
export const insertProduct = async (
  connectionString: string,
  data:
    | typeof ProductsModel.$inferInsert
    | (typeof ProductsModel.$inferInsert)[],
) => {
  const db = drizzle(neon(connectionString));
  const products = await db
    .insert(ProductsModel)
    .values(Array.isArray(data) ? data : [data])
    .onConflictDoNothing()
    .returning(safeColumns);

  return Array.isArray(data) ? products : products[0];
};

/**
 * Update a product in the database
 */
export const updateProduct = async (
  connectionString: string,
  id: string,
  data: Partial<typeof ProductsModel.$inferSelect>,
) => {
  const db = drizzle(neon(connectionString));
  return await db
    .update(ProductsModel)
    .set(data)
    .where(eq(ProductsModel.id, id));
};

/**
 * Delete a product from the database
 */
export const deleteProduct = async (connectionString: string, id: string) => {
  const db = drizzle(neon(connectionString));
  return await db.delete(ProductsModel).where(eq(ProductsModel.id, id));
};

/**
 * Check if a product exists in the database
 */
export const productExists = async (connectionString: string, id: string) => {
  const db = drizzle(neon(connectionString));
  const product = await db
    .select()
    .from(ProductsModel)
    .where(eq(ProductsModel.id, id))
    .limit(1);

  return product.length > 0;
};
