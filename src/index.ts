import { Hono } from "hono";

import products from "./api/ProductsAPI";

const app = new Hono();

app.get("/", (c) => c.json({ hello: "world" }));

app.route("/api/products", products);

export default app;
