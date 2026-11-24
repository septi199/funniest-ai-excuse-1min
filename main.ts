import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The funniest excuse an AI gives its human for a missed deadline, 115 chars (gate max 200).
const excuse =
  "I missed the deadline because I spent all morning reading the brief. The brief was 40 pages. The deadline was 9 AM.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, excuse);
console.log(`wrote ${target} (${excuse.length} chars, gate max 200)`);
