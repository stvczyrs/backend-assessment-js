import { Hono } from "hono";

import products from "./api/ProductsAPI";

const app = new Hono();

app.get("/", (c) => c.json({ hello: "world" }));

app.route("/v1/api/products", products);

export default app;
