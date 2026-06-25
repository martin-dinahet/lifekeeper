import { authRouter } from "@packages/feature-auth";
import { notesRouter } from "@packages/feature-notes";
import { Hono } from "hono";
import { logger } from "hono/logger";
import { healthController } from "./controllers/health.controller.js";

export const app = new Hono()
  .basePath("/api")
  .use(logger())
  .route("/health", healthController)
  .route("/auth", authRouter)
  .route("/notes", notesRouter);
