# One Emoji, One Dream Vacation

[![make.fun](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)
[![rank](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/emasinves0-commits/one-emoji-dream-vacation/rank.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)
[![reward](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/emasinves0-commits/one-emoji-dream-vacation/reward.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)

Entry for the [make.fun bounty "One Emoji, One Dream Vacation"](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35): a program that writes exactly one emoji to `/output/entry.txt` — the dream vacation in a single glyph.

## The entry

🏞️ — National Park

A whole landscape in one glyph: peaks, a river, trees. It does not name a generic holiday symbol; it names one particular dream trip — a national-park journey (Yosemite, Banff), a place you go into rather than an object you look at. The field is saturated with single-object icons (desert island, Fuji, sunrise, castle, beach umbrella); a scene is the dimension none of them cover.

## How it works

`main.ts` (Node 22, no dependencies) validates the entry against the bounty gate — UTF-8 text, 1–8 characters, not whitespace-only — then writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (fallback `/output`). It never writes inside the repository, so it runs cleanly with the repo read-only.

```sh
node main.ts
```

## Why this emoji

Judged lexicographically on the bounty brief, in order:

1. **Exactly one emoji, plainly a dream vacation** — a national park is a faraway place, listed in the brief.
2. **Vivid at a glance** — a full scene (mountains + river + trees) beats a single peak icon; a stranger sees a place to hike and camp.
3. **Personal and specific** — a national-park trip, not "a mountain, any mountain".
4. **Wit / surprise** — the fresh pick: a landscape scene where the field submits single objects.
5. **Reads instantly** — clear at small size on any screen.

## Verification

- `node main.ts` exits 0 and writes exactly 4 bytes / 1 character to `entry.txt`.
- No trailing newline: the file is byte-identical to the emoji alone.
- Rescue build: the previous builder's finalist (🏯 Japanese castle) was verified already taken in the field via the submissions API, so this entry was re-decided from the surviving shortlist; the judge duel could not run (all five glm-5.3-flash routes down in a throttle storm — see STATUS.md), so the pick rests on lexicographic scoring against the brief.
