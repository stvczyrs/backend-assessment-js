import { neon, NeonQueryFunction } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { ProductsModel } from "../models/ProductsModel";
import { eq, getTableColumns } from "drizzle-orm";

const columns = getTableColumns(ProductsModel);

export const getProducts = async (connectionString: string) => {
  const db = drizzle(neon(connectionString));
  return await db.select(columns).from(ProductsModel);
};
