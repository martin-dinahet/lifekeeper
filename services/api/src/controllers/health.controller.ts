import { Hono } from "hono";

export const healthController = new Hono().get("/", (c) => c.json({ status: "OK" }));
