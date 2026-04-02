import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function rmDirWithRetries(dirRelative, retries = 8) {
  const dir = path.join(projectRoot, dirRelative);
  if (!fs.existsSync(dir)) return;

  let lastErr;
  for (let i = 0; i < retries; i += 1) {
    try {
      fs.rmSync(dir, { recursive: true, force: true });
      return;
    } catch (err) {
      lastErr = err;
      await sleep(150 * (i + 1));
    }
  }

  throw lastErr;
}

await rmDirWithRetries("out");
await rmDirWithRetries(".next");

const result = spawnSync(
  process.platform === "win32" ? "npx.cmd" : "npx",
  ["next", "build"],
  {
    stdio: "inherit",
    env: {
      ...process.env,
      // Évite un certain nombre de EPERM Windows observés avec Turbopack
      NEXT_DISABLE_TURBOPACK: "1",
    },
  },
);

process.exit(result.status ?? 1);
