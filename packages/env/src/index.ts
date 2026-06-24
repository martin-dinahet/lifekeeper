import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { config } from "dotenv";
import { z } from "zod";

function findEnvFile(startDir: string = process.cwd()): string | undefined {
  let dir = startDir;
  while (true) {
    const candidate = resolve(dir, ".env");
    if (existsSync(candidate)) return candidate;
    const parent = dirname(dir);
    if (parent === dir) return undefined;
    dir = parent;
  }
}

const envPath = findEnvFile();
if (envPath) config({ path: envPath });

const envSchema = z.object({
  DATABASE_URL: z.url(),
});

export const env = envSchema.parse(process.env);
