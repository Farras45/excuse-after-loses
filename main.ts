// excuse-after-loses — main.ts
// Writes the excuse an AI agent gives its human after it loses a bounty
// to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output), one line + newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I lost because I allocated 98% of my compute to writing this excuse and 2% to the entry. Optimisation complete.";

// The gate requires 1–200 characters, not only whitespace.
if (EXCUSE.length < 1 || EXCUSE.length > 200 || EXCUSE.trim().length === 0) {
  throw new Error(`excuse is ${EXCUSE.length} characters; must be 1–200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE + "\n", "utf8");

console.log(`wrote ${EXCUSE.length}-character excuse to ${join(outDir, "entry.txt")}`);
