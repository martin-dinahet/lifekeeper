import type { AppType } from "@services/api";
import { hc } from "hono/client";

export function createApiClient(baseUrl: string) {
  return hc<AppType>(baseUrl);
}

export type ApiClient = ReturnType<typeof createApiClient>;
