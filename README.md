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
.nojekyll             tells GitHub Pages to serve files as-is
```

## Adding a new game

1. Put screenshots in `assets/img/<project-id>/`.
2. In `js/main.js`, copy the object inside `PROJECTS`, change the fields
   (`id`, titles, `abilities`, `tech`, `gallery`, `playUrl` / `windowsUrl` / `macUrl`).
3. Reduce `SEALED_SLOTS` by one if the new game replaces a locked card.

The featured card is always `PROJECTS[0]`; the case-study page lives at `/#<id>`.

## Placeholders to fill in

- `js/main.js` → `playUrl`, `windowsUrl`, `macUrl` (itch.io links; empty = buttons hidden)
- `index.html` → About paragraph, portrait image, LinkedIn URL
- `assets/resume.pdf` → drop in your résumé

## Deploying (GitHub Pages)

Repo name `mikecaimmm.github.io`, branch `main`. In the repo's
**Settings → Pages**, set *Source: Deploy from a branch*, *Branch: main / (root)*.

---
The Legend of Zelda is a trademark of Nintendo. This is a non-commercial student recreation made for coursework.
