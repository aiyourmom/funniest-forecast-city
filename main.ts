import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Port Yesterday: sunny with a 90% chance of Tuesday. Residents are asked to set their clocks to whenever.";

const chars = [...TEXT];
if (chars.length < 1 || chars.length > 120) {
  throw new Error(`entry must be 1-120 characters, got ${chars.length}`);
}
if (/\n/.test(TEXT) || !/[A-Za-z0-9]/.test(TEXT)) {
  throw new Error("entry must be a single non-empty line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
console.log(`saved ${chars.length} characters to entry.txt`);
