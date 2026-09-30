/* =========================================================
   Mike Cai — portfolio script (vanilla JS, no build step)

   To add a new game: copy the object in PROJECTS below, change
   the fields, and drop its screenshots in assets/img/<id>/.
   The collection shelf, featured card and case-study page are
   all generated from this array. You never touch the layout.
   ========================================================= */

const PROJECTS = [
  {
    id: 'zelda',                                   // used in the URL: /#zelda
    title: 'The Legend of Zelda — Dungeon 1 Recreation + Custom “Gravity” Dungeon',
    cardTitle: 'The Legend of Zelda — Dungeon 1 + Gravity Dungeon',
    genre: 'Action-Adventure · Dungeon Crawler',
    role: 'Programmer',
    cost: 1,                                       // the number in the blue gem
    term: 'Fall 2026',
    course: 'EECS 494 · University of Michigan · Fall 2026 · Team of 2 (with Alef)',
    team: 'With Alef',
    badges: ['Unity 6', 'C#', 'Git'],
    altBadges: ['Team of 2'],
    blurb: 'A faithful recreation of the first NES dungeon, plus an original bonus level where pressure buttons rotate the whole room 180°.',
    hoverExtra: 'I built the player controller, every weapon, the dungeon systems, the HUD, and the whole gravity dungeon.',
    cover: 'assets/img/zelda/05_gravity_flip.png',
    coverAlt: 'Card artwork: the dungeon room mid-rotation with Link at its center',
    shelfArt: 'assets/img/zelda/01_dungeon_entrance.png',
    shelfAlt: 'The dungeon entrance room with Link among stone statues',

    overview: 'A faithful recreation of the first dungeon of the original NES <em>The Legend of Zelda</em> (1986), built in Unity. It includes grid-accurate movement, room-by-room screen scrolling, classic weapons and enemies, and the Aquamentus boss fight. On top of the recreation, we designed an original bonus level built around <strong>gravity-flipping rooms</strong>. Pressure buttons rotate the entire room 180°, ladders let Link climb onto and walk along the tops of walls, and heavy weights fall with gravity. Every room is a small spatial puzzle.',

    // "Card abilities" — my personal contributions
    abilities: [
      { name: 'Player Controller', icon: 'arrow', text: 'Grid-snapped NES-style movement, newest-key input priority, animation, and movement locking during cutscenes and transitions.' },
      { name: 'Weapon System', icon: 'sword', text: 'Sword and full-health sword beam, bow and arrows, boomerang, bombs, and weapon switching with the HUD.' },
      { name: 'Dungeon Systems', icon: 'door', text: 'Doors, locked doors and keys, pushable blocks, stairs, bombable walls, room-clear shutters, and screen transitions.' },
      { name: 'Health & HUD', icon: 'heart', text: 'Hearts with half-heart display, the low-health warning beep, damage and knockback, heart containers, drops, and the Triforce pickup.' },
      { name: 'Sound Effects', icon: 'sound', text: 'Integrated across weapons, enemies, doors, pickups, and rooms.' },
      { name: 'Gravity Dungeon · Signature', icon: 'flip', signature: true,
        text: 'Designed and programmed the custom bonus level:',
        list: ['180° room rotation with a screen fade', 'Pressure buttons using parity logic, so any combination of boxes works', 'Ladder and wall-walking rooms', 'Gravity-driven weights', 'One-key room reset'] },
    ],

    tech: [
      { name: 'Unity 6', note: '6000.3', rare: true },
      { name: 'C#' },
      { name: 'Unity Physics & Colliders' },
      { name: 'Unity UI' },
      { name: 'Unity Audio' },
      { name: 'Git / GitHub (team version control)' },
      { name: 'Windows & macOS standalone builds' },
    ],

    gallery: [
      { title: 'Sequence · The Gravity Flip', shots: [
        { src: 'assets/img/zelda/04_gravity_room.png', alt: 'A room with a crate next to a pressure button; Link stands at the left', caption: 'Custom dungeon: push the box onto the gravity button…' },
        { src: 'assets/img/zelda/05_gravity_flip.png', alt: 'The whole room shown mid-rotation, tilted 45 degrees', caption: '…and the entire room rotates 180°' },
        { src: 'assets/img/zelda/06_gravity_flipped.png', alt: 'The same room after flipping; the crate and dark tiles are now on the left', caption: 'Flipped — the left door is now on the right' },
      ]},
      { title: 'Sequence · The Weight Puzzle', shots: [
        { src: 'assets/img/zelda/08_weight_puzzle.png', alt: 'Link stands above a heavy weight that sits in front of a ladder', caption: 'A weight blocks the ladder…' },
        { src: 'assets/img/zelda/09_weight_puzzle_flipped.png', alt: 'After the flip the weights have dropped to the new floor', caption: '…until gravity flips and it falls to the new floor' },
        { src: 'assets/img/zelda/07_ladder_wall_walk.png', alt: 'Link walking along the tops of dark wall tiles in the ladder room', caption: 'Ladder room: climb up and walk along the tops of walls' },
      ]},
      { title: 'Dungeon 1 · The Recreation', small: true, shots: [
        { src: 'assets/img/zelda/01_dungeon_entrance.png', alt: 'The dungeon entrance with rows of stone statues', caption: 'Dungeon entrance — room-by-room scrolling like the 1986 original' },
        { src: 'assets/img/zelda/02_combat_sword_beam.png', alt: 'Link fires a sword beam while skeletal Stalfos surround him', caption: 'Sword beam vs. Stalfos' },
        { src: 'assets/img/zelda/03_boss_aquamentus.png', alt: 'The green dragon boss Aquamentus with fireballs flying toward Link', caption: 'Boss fight: Aquamentus' },
        { src: 'assets/img/zelda/10_old_man.png', alt: 'A dark room where the Old Man stands between two fires', caption: 'The Old Man’s hint room' },
        { src: 'assets/img/zelda/11_goriya_room.png', alt: 'Three Goriya throw boomerangs across the room at Link', caption: 'Goriya and their boomerangs' },
      ]},
    ],

    // ---- BUILD LINKS: paste your itch.io URLs here. Empty = button hidden. ----
    playUrl: 'play/zelda/',  // web build hosted in this repo (or an itch.io URL)
    windowsUrl: '',  // itch.io page (downloads are on that page)
    macUrl: '',      // itch.io page
  },
];

// Locked slots shown after the real projects ("sealed" card backs).
const SEALED_SLOTS = [
  { label: 'Sealed', sub: 'Project 2 · Unlocks later this semester' },
];
const TOTAL_SLOTS = 3; // shelf size; remaining slots render as empty outlines

/* ---------------- icons ---------------- */
const ICONS = {
  code: '<path d="M8 6l-5 6 5 6"/><path d="M16 6l5 6-5 6"/><path d="M14 4l-4 16"/>',
  arrow: '<path d="M5 12h14"/><path d="M12 5l7 7-7 7"/>',
  sword: '<path d="M14 4l6 6-9 9-6-6z"/><path d="M5 19l-2 2"/>',
  door: '<rect x="4" y="3" width="16" height="18" rx="2"/><circle cx="15" cy="12" r="1.5"/>',
  heart: '<path d="M12 21s-7-4.4-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.6-9 9-9 9z"/>',
  sound: '<path d="M4 10v4h4l5 4V6L8 10z"/><path d="M16 9a4 4 0 0 1 0 6"/>',
  flip: '<path d="M4 12a8 8 0 0 1 14-5"/><path d="M20 12a8 8 0 0 1-14 5"/><path d="M18 3v4h-4"/><path d="M6 21v-4h4"/>',
  lock: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
};
const icon = (name, size = 16, sw = 2.4) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ''}</svg>`;

/* ---------------- card markup ---------------- */
function cardHTML(p, { art = p.cover, alt = p.coverAlt, asLink = true } = {}) {
  const tag = asLink ? 'a' : 'div';
  const href = asLink ? ` href="#${p.id}" aria-label="Inspect card: ${p.cardTitle}"` : '';
  return `
  <${tag} class="card"${href} data-tilt>
    <div class="card-inner">
      <span class="corner tl"></span><span class="corner tr"></span><span class="corner bl"></span><span class="corner br"></span>
      <div class="card-art">
        <span class="gem" aria-label="Card number ${p.cost}">${p.cost}</span>
        <span class="shine"></span>
        <img class="px" src="${art}" alt="${alt}" loading="lazy">
      </div>
      <div class="ribbon"><h3>${p.cardTitle}</h3></div>
      <div class="card-text parch">
        <div class="type-line">
          <span class="genre">${p.genre}</span>
          <span class="role" title="My role">${icon('code', 13)}${p.role}</span>
        </div>
        <hr class="rule">
        <p class="blurb">${p.blurb}</p>
        <div class="extra"><p>${p.hoverExtra}</p></div>
        <ul class="badges">
          ${p.badges.map(b => `<li>${b}</li>`).join('')}
          ${(p.altBadges || []).map(b => `<li class="alt">${b}</li>`).join('')}
        </ul>
      </div>
      <div class="card-foot"><span>EECS 494 · ${p.term}</span><span class="go">${asLink ? '▶ Inspect' : p.team}</span></div>
    </div>
  </${tag}>`;
}

function sealedHTML(s) {
  return `
  <div class="card-back" aria-label="Locked card: ${s.sub}">
    <div class="pattern">
      <div class="seal">${icon('lock', 40, 1.8)}</div>
      <div class="label">${s.label.toUpperCase()}</div>
      <div class="sub">${s.sub}</div>
    </div>
  </div>`;
}

/* ---------------- home rendering ---------------- */
function renderHome() {
  const featured = PROJECTS[0];
  document.getElementById('featured-slot').innerHTML = featured ? cardHTML(featured) : '';

  const grid = document.getElementById('collection-grid');
  const parts = PROJECTS.map(p => cardHTML(p, { art: p.shelfArt || p.cover, alt: p.shelfAlt || p.coverAlt }));
  SEALED_SLOTS.forEach(s => parts.push(sealedHTML(s)));
  while (parts.length < TOTAL_SLOTS) parts.push('<div class="slot-empty" aria-hidden="true">EMPTY SLOT</div>');
  grid.innerHTML = parts.join('');

  document.getElementById('collection-count').textContent =
    `${PROJECTS.length} / ${PROJECTS.length + SEALED_SLOTS.length} cards collected · more each semester`;
}

/* ---------------- project view ---------------- */
let lightboxList = [];

function buildButtons(p, big = false) {
  const b = [];
  if (p.playUrl) {
    const itch = /itch\.io/.test(p.playUrl);
    b.push(`<a class="btn btn-gold" href="${p.playUrl}"${itch ? ' target="_blank" rel="noopener"' : ''}>▶ ${itch ? 'Play on itch.io' : 'Play in browser'}</a>`);
  }
  if (p.windowsUrl) b.push(`<a class="btn btn-blue" href="${p.windowsUrl}" target="_blank" rel="noopener">${big ? 'Download for Windows' : '⬇ Windows'}</a>`);
  if (p.macUrl) b.push(`<a class="btn btn-blue" href="${p.macUrl}" target="_blank" rel="noopener">${big ? 'Download for macOS' : '⬇ macOS'}</a>`);
  return b.length ? `<div class="btn-row">${b.join('')}</div>` : '<p class="soon">Builds coming soon on itch.io.</p>';
}

function renderProject(p) {
  lightboxList = [];
  const galleryHTML = p.gallery.map(group => {
    const shots = group.shots.map(s => {
      const i = lightboxList.push(s) - 1;
      return `<figure class="shot">
        <button type="button" data-lb="${i}" aria-label="Enlarge screenshot: ${s.caption}">
          <img class="px" src="${s.src}" alt="${s.alt}" loading="lazy">
        </button>
        <figcaption>${s.caption}</figcaption>
      </figure>`;
    }).join('');
    const cols = group.small ? Math.min(group.shots.length, 5) : Math.min(group.shots.length, 3);
    return `<div class="gallery-group"><h3>${group.title}</h3>
      <div class="gallery-row${group.small ? ' small' : ''}" style="--cols:${cols}">${shots}</div></div>`;
  }).join('');

  const abilities = p.abilities.map(a => `
    <li class="ability${a.signature ? ' signature' : ''}">
      <span class="token">${icon(a.icon)}</span>
      <div><h3>${a.name}</h3><p>${a.text}</p>${a.list ? `<ul>${a.list.map(x => `<li>${x}</li>`).join('')}</ul>` : ''}</div>
    </li>`).join('');

  const tech = p.tech.map(t => `<li class="${t.rare ? 'rare' : ''}"><span>${t.name}</span>${t.note ? `<small>${t.note}</small>` : ''}</li>`).join('');

  const view = document.getElementById('project-view');
  view.innerHTML = `
    <div class="pv-top">
      <a class="btn btn-wood" href="#collection">◀ Back to collection</a>
      <span class="meta">Card inspection · #${p.id}</span>
    </div>

    <div class="pv-hero">
      ${cardHTML(p, { asLink: false })}
      <div class="pv-summary">
        <div class="pv-title">
          <p class="eyebrow gold">${p.course}</p>
          <h1>${p.title}</h1>
        </div>
        <section class="parch framed panel" aria-labelledby="h-overview">
          <div class="panel-head"><h2 id="h-overview">I · Game Overview</h2><span></span></div>
          <p>${p.overview}</p>
        </section>
        <div class="wood play-plaque">
          <span class="label">Play the game</span><span class="line"></span>
          ${buildButtons(p)}
        </div>
      </div>
    </div>

    <div class="pv-grid">
      <section class="parch framed panel abilities-panel" aria-labelledby="h-abilities">
        <div class="panel-head"><h2 id="h-abilities">II · Card Abilities — My Contributions</h2><span></span></div>
        <ul class="abilities">${abilities}</ul>
      </section>
      <section class="parch framed panel" aria-labelledby="h-tech">
        <div class="panel-head"><h2 id="h-tech">III · Technologies Used</h2><span></span></div>
        <ul class="equipment">${tech}</ul>
      </section>
    </div>

    <section class="parch framed panel" aria-labelledby="h-gallery">
      <div class="panel-head"><h2 id="h-gallery">IV · Gameplay Screenshots</h2><span></span><small>Click to enlarge · ◀ ▶ keys</small></div>
      ${galleryHTML}
    </section>

    <section class="wood build-plaque" aria-labelledby="h-build">
      <div>
        <p class="eyebrow gold">V – VII · Claim your copy</p>
        <h2 id="h-build">Play the game</h2>
        <p>Web build plus Windows and macOS standalone builds, hosted on itch.io.</p>
      </div>
      ${buildButtons(p, true)}
    </section>`;

  view.querySelectorAll('[data-lb]').forEach(btn =>
    btn.addEventListener('click', () => openLightbox(+btn.dataset.lb)));
  bindTilt(view);
}

/* ---------------- routing (hash) ---------------- */
const homeView = document.getElementById('home-view');
const projectView = document.getElementById('project-view');

function route() {
  const id = decodeURIComponent(location.hash.slice(1));
  const project = PROJECTS.find(p => p.id === id);

  if (project) {
    renderProject(project);
    homeView.hidden = true;
    projectView.hidden = false;
    projectView.classList.remove('entering'); void projectView.offsetWidth; projectView.classList.add('entering');
    document.title = `${project.cardTitle} — Mike Cai`;
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    setActive('collection');
  } else {
    const wasProject = !projectView.hidden;
    projectView.hidden = true;
    homeView.hidden = false;
    document.title = 'Mike Cai — Game Developer';
    if (wasProject && id) {
      const target = document.getElementById(id);
      if (target) requestAnimationFrame(() => target.scrollIntoView());
    }
  }
  closeMenu();
}
window.addEventListener('hashchange', route);

/* ---------------- active nav on scroll ---------------- */
const navLinks = [...document.querySelectorAll('[data-nav]')];
function setActive(key) {
  navLinks.forEach(a => {
    const on = a.dataset.nav === key;
    a.classList.toggle('active', on);
    if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
  });
}
const sectionObserver = new IntersectionObserver(entries => {
  if (!projectView.hidden) return;
  entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('[data-section]').forEach(s => sectionObserver.observe(s));

/* ---------------- mobile menu ---------------- */
const menuBtn = document.querySelector('.menu-btn');
const tabs = document.getElementById('site-nav');
function closeMenu() { tabs.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }
menuBtn.addEventListener('click', () => {
  const open = tabs.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});
tabs.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });

/* ---------------- card tilt ---------------- */
const canTilt = window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
                !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function bindTilt(root = document) {
  if (!canTilt) return;
  root.querySelectorAll('[data-tilt]').forEach(card => {
    if (card.dataset.tiltBound) return;
    card.dataset.tiltBound = '1';
    card.addEventListener('pointermove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.setProperty('--ry', `${x * 12}deg`);
      card.style.setProperty('--rx', `${-y * 10}deg`);
    });
    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--ry', '0deg');
      card.style.setProperty('--rx', '0deg');
    });
  });
}

/* ---------------- lightbox ---------------- */
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lb-img');
const lbCap = document.getElementById('lb-cap');
const lbCount = document.getElementById('lb-count');
let lbIndex = 0;

function showShot(i) {
  lbIndex = (i + lightboxList.length) % lightboxList.length;
  const s = lightboxList[lbIndex];
  lbImg.src = s.src; lbImg.alt = s.alt;
  lbCap.textContent = s.caption;
  lbCount.textContent = `${lbIndex + 1} / ${lightboxList.length}`;
}
function openLightbox(i) { showShot(i); lb.showModal(); }
lb.querySelector('.lb-prev').addEventListener('click', () => showShot(lbIndex - 1));
lb.querySelector('.lb-next').addEventListener('click', () => showShot(lbIndex + 1));
lb.querySelector('.lb-close').addEventListener('click', () => lb.close());
lb.addEventListener('click', e => { if (e.target === lb) lb.close(); });
lb.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') { e.preventDefault(); showShot(lbIndex - 1); }
  if (e.key === 'ArrowRight') { e.preventDefault(); showShot(lbIndex + 1); }
});

/* ---------------- init ---------------- */
renderHome();
bindTilt();
route();
