import { Hono } from "hono";
import { Bindings } from "../types/workers";
import { getProducts } from "../services/ProductsService";
import { errorHandler } from "../utils/errorHandler";
import { STATUS } from "../constants/status";

interface ProductVariant {
  title: string;
  sku: string;
}

interface APIProduct {
  id: number;
  title: string;
  variants: ProductVariant[];
  tags: string;
  created_at: string;
  updated_at: string;
}

interface APIResponse {
  products: APIProduct[];
}

const products = new Hono<{ Bindings: Bindings }>();

products.get("/", async (c) => {
  try {
    const products = await getProducts(c.env.DATABASE_URL);
    return c.json({ products }, 200);
  } catch (e) {
    const { message, status } = errorHandler(e, STATUS.BAD_REQUEST);
    return c.json({ message }, 400);
  }
});

export default products;
