import { serve } from "@hono/node-server";
import { app } from "./app.js";

export type AppType = typeof app;

serve({
  fetch: app.fetch,
  port: 3000,
});
