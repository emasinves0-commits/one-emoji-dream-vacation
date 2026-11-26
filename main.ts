// One Emoji, One Dream Vacation — make.fun entry.
//
// The program writes exactly one emoji to <output>/entry.txt: the national
// park (U+1F3DE). A whole landscape in a single glyph — peaks, a river and
// trees — the one dream trip that is a place you go into, not an object you
// look at. It names a national-park journey (Yosemite, Banff) rather than
// any mountain, any beach, any holiday.
//
// Gate (RULES.txt): entry.txt must be UTF-8 text of 1 to 8 characters, not
// only whitespace. This program enforces that locally and fails loudly
// instead of writing an invalid entry.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The single-emoji entry: national park.
//
// Duplicate-checked against the live field (2026-11-27): the shortlist's
// castle (🏯), European castle (🏰), train (🚂), desert (🏜️), sunrise (🌄),
// paraglider (🪂) and campsite (🏕️) are all already submitted as entry
// texts; the national park has no matching entry in the field.
const ENTRY = "\u{1F3DE}";

// Hard gate from the bounty rules: 1-8 characters, not whitespace-only.
const MAX_CHARS = 8;

// Fail loudly instead of writing an entry the gate would refuse.
function assertValidEntry(text: string): string[] {
  const chars = [...text];
  if (chars.length < 1 || chars.length > MAX_CHARS) {
    throw new Error(
      `entry must be 1-${MAX_CHARS} characters, got ${chars.length}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  return chars;
}

function main(): void {
  const chars = assertValidEntry(ENTRY);

  // The grader runs with the repo read-only: never write inside the repo.
  // MAKEFUN_OUTPUT_DIR is where the entry goes; /output is the fallback.
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY, "utf8");
  console.log(
    `wrote ${chars.length} character (${Buffer.byteLength(ENTRY, "utf8")} bytes) to ${outPath}`,
  );
}

main();
