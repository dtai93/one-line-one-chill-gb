// Write the contest entry to the requested output directory.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = "The frost on my locked bedroom window melted from the outside, one fingertip at a time.";
if ([...text].length < 1 || [...text].length > 199 || !text.trim()) {
  throw new Error("Entry must contain 1-199 non-whitespace characters.");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), text, "utf8");
