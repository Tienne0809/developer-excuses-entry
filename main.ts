import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Make the AI Judge Laugh: Developer Excuses — make.fun bounty entry.
// The program writes one production-outage excuse (141 chars) to the output entry file.
const line =
  "The deploy succeeded — Docker just used the .env from my laptop, so production has been emailing order confirmations to my mom since Tuesday.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
