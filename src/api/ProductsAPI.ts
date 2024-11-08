import { Hono } from "hono";
import { Bindings } from "../types/workers";
import {
  getProducts,
  insertProduct,
  deleteProduct,
  productExists,
  updateProduct,
} from "../services/ProductsService";
import { errorHandler } from "../utils/errorHandler";
import { STATUS } from "../constants/status";
import { z } from "zod";
import { v4 as uuidv4 } from "uuid";

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

/**
 * Get all products from the external API and insert them into the database
 * then return all products from the database
 */
products.get("/", async (c) => {
  try {
    // Get all products from the external API
    const response = await fetch(c.env.EXTERNAL_API_URL);
    const data = (await response.json()) as APIResponse;
    const { products: mockedProducts } = data;

    // Transform the products to match the database schema
    const transformedProducts = mockedProducts.map((product) => ({
      id: product.id.toString(),
      title: product.title,
      variantTitles: product.variants.map((variant) => variant.title),
      tags: product.tags
        ? product.tags.split(",").map((tag) => tag.trim())
        : [],
      createdAt: new Date(product.created_at),
      updatedAt: new Date(product.updated_at),
      skus: product.variants.map((variant) => variant.sku),
    }));

    // Insert the products into the database
    const insertedProducts = await insertProduct(
      c.env.DATABASE_URL,
      transformedProducts,
    );
  } catch (e) {
    const { message, status } = errorHandler(e, STATUS.BAD_REQUEST);
    return c.json({ message }, 400);
  }

  try {
    // Get all products from the database
    const products = await getProducts(c.env.DATABASE_URL);
    return c.json({ products }, 200);
  } catch (e) {
    const { message, status } = errorHandler(e, STATUS.BAD_REQUEST);
    return c.json({ message }, 400);
  }
});

/**
 * Insert a new product into the database
 */
products.post("/", async (c) => {
  // Get the body from the request
  const body = await c.req.json();

  // Validate the body against the schema
  const schema = z.object({
    productId: z.string().optional(),
    title: z.string(),
    tags: z.string(),
    createdAt: z.string().pipe(z.coerce.date()).optional(),
    updatedAt: z.string().pipe(z.coerce.date()).optional(),
    productCode: z.string(),
  });

  const validation = schema.safeParse(body);

  // If the body is invalid, return an error
  if (!validation.success) {
    const { message, status } = errorHandler(
      validation.error,
      STATUS.BAD_REQUEST,
    );
    return c.json({ message }, 400);
  }

  // Map the validated data to the database schema
  const newProduct = {
    id: validation.data.productId ?? uuidv4(),
    title: validation.data.title,
    variantTitles: [],
    tags: validation.data.tags.split(",").map((tag) => tag.trim()),
    skus: [validation.data.productCode],
    ...(validation.data.createdAt && {
      createdAt: new Date(validation.data.createdAt),
    }),
    ...(validation.data.updatedAt && {
      updatedAt: new Date(validation.data.updatedAt),
    }),
  };

  // Insert the new product into the database
  const product = await insertProduct(c.env.DATABASE_URL, newProduct);

  // Return the new product
  return c.json({ product }, 201);
});

/**
 * Update all products in the database with the SKU
 */
products.put("/", async (c) => {
  const body = await c.req.json();

  // Validate the body against the schema
  const schema = z.object({
    productCode: z.string(),
  });

  const validation = schema.safeParse(body);

  // If the body is invalid, return an error
  if (!validation.success) {
    const { message, status } = errorHandler(
      validation.error,
      STATUS.BAD_REQUEST,
    );
    return c.json({ message }, 400);
  }

  const skus = validation.data.productCode.split(",").map((sku) => sku.trim());

  // Update all products in the database with the SKU
  // Get all products from the database
  const allProducts = await getProducts(c.env.DATABASE_URL);

  // Map the products to the database schema
  const toUpdateProducts = allProducts.map((product) => ({
    id: product.id,
    title: product.title,
    variantTitles: skus.map((sku) => `${product.title} - ${sku}`),
    tags: product.tags,
    skus: skus,
    updatedAt: new Date(),
  }));

  // Update all products concurrently using Promise.all
  try {
    await Promise.all(
      toUpdateProducts.map((product) =>
        updateProduct(c.env.DATABASE_URL, product.id, product),
      ),
    );
  } catch (e) {
    const { message, status } = errorHandler(e, STATUS.BAD_REQUEST);
    return c.json({ message }, 400);
  }

  // Refetch the products from the database
  const updatedProducts = await getProducts(c.env.DATABASE_URL);
  return c.json({ products: updatedProducts }, 200);
});

/**
 * Delete a product from the database
 */
products.delete("/:product_id", async (c) => {
  const { product_id: productId } = c.req.param();

  // Check if the product exists
  const exists = await productExists(c.env.DATABASE_URL, productId);
  if (!exists) {
    return c.json({ message: "Product not found" }, 404);
  }

  // Delete the product
  try {
    await deleteProduct(c.env.DATABASE_URL, productId);
    return c.json({ message: "Product deleted" }, 200);
  } catch (e) {
    const { message, status } = errorHandler(e, STATUS.BAD_REQUEST);
    return c.json({ message }, 400);
  }
});

export default products;
