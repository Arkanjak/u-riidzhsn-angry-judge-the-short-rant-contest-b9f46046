// Angry Judge: The Short Rant Contest.
// A single deterministic rant about the self-checkout, written to
// /output/entry.txt. Fixed text, no I/O besides the output file,
// no network, no randomness — byte-identical on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const RANT = [
  "The self-checkout just screamed 'UNEXPECTED ITEM IN THE BAGGING AREA' at me",
  "because I put the milk in the bagging area. It has a camera, a scale, and",
  "the confidence of a man who has never been wrong — and still needs a human",
  "with a key to confirm that yes, this is milk. I did not steal the milk.",
  "The machine stole my dignity, in front of twelve strangers.",
].join(" ");

const OUTPUT_DIR = "/output";
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), RANT, "utf8");
