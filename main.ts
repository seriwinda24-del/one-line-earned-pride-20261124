import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "On her third evening, the apprentice ran her palm along the warped plank she had planed square by hand and found no lip, no ridge, no gap — only wood, flat and still.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
