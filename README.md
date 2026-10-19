# Mike Cai — Game Developer Portfolio

Personal portfolio for EECS 494 (Game Design & Development), University of Michigan.
Live at **https://mikecaimmm.github.io/**

Static site: plain HTML, CSS and vanilla JavaScript. No build step — open `index.html` or push to GitHub Pages.

## Structure

```
index.html            page shell (hero, collection, about, skills, contact)
css/style.css         all styling; colors are CSS variables in :root
js/main.js            PROJECTS data array + rendering, routing, tilt, lightbox
assets/img/zelda/     screenshots for the Zelda project
assets/img/p2_gold/   screenshots for Swipe Crash
play/zelda/           existing Zelda WebGL player
play/p2_gold/         Swipe Crash (p2_gold) WebGL player and compiled build
.nojekyll             tells GitHub Pages to serve files as-is
```

## Adding a new game

1. Put screenshots in `assets/img/<project-id>/`.
2. In `js/main.js`, copy the object inside `PROJECTS`, change the fields
   (`id`, titles, `abilities`, `tech`, `gallery`, `playUrl` / `windowsUrl` / `macUrl`).
3. Reduce `SEALED_SLOTS` by one if the new game replaces a locked card.

The featured card is always `PROJECTS[0]`; the case-study page lives at `/#<id>`.

## Swipe Crash / p2_gold

The project card is at [/#p2_gold](https://mikecaimmm.github.io/#p2_gold), and
the playable build is at [/play/p2_gold/](https://mikecaimmm.github.io/play/p2_gold/).
Use a desktop keyboard: Enter or Space opens the title menu, then arrow keys slide.

Only the exported WebGL runtime is published. Do not copy Unity Assets, Packages,
ProjectSettings, Library, debug symbols, or project archives into the public site.
The supplied export uses Brotli without decompression fallback. For GitHub Pages,
the three .br payloads were decompressed to .data, .framework.js, and .wasm and the
player references those files. No custom Content-Encoding headers are needed.
To refresh the build, replace the four files under play/p2_gold/Build/ from the new
export, decompressing .br payloads if needed, and verify the player paths and sizes
(GitHub rejects files at or above 100 MiB). Keep credits.txt with the build.

## Placeholders to fill in

- `js/main.js` → `playUrl`, `windowsUrl`, `macUrl` (itch.io links; empty = buttons hidden)
- `index.html` → About paragraph, portrait image, LinkedIn URL
- `assets/resume.pdf` → drop in your résumé

## Deploying (GitHub Pages)

Repo name `mikecaimmm.github.io`, branch `main`. In the repo's
**Settings → Pages**, set *Source: Deploy from a branch*, *Branch: main / (root)*.

---
The Legend of Zelda is a trademark of Nintendo. This is a non-commercial student recreation made for coursework.
