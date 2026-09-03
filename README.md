# LabSoft — Website

**SPA/CSR** application for Universidad EAFIT's Software Lab, built with
Vue 3, Vue Router, TypeScript, Vite, and Tailwind CSS v4.

## Stack

| Tool            | Role                                                     |
| --------------- | -------------------------------------------------------- |
| Vue 3           | UI framework (Composition API + `<script setup>`)        |
| Vue Router      | Client-side routing                                      |
| TypeScript      | Static typing                                            |
| Vite            | Dev server and bundler                                   |
| Tailwind CSS v4 | Styles (configured in CSS, no `tailwind.config.js`)      |
| ESLint + oxlint | Code quality                                             |
| Prettier        | Formatting                                               |
| Font Awesome 6  | Icons (via CDN in `index.html`)                          |

## Requirements

Node.js `^22.18.0` or `>=24.12.0`.

## Getting started

```bash
npm install
```

```bash
npm run dev
```

The app runs at http://localhost:5173.

## Scripts

| Command              | What it does                         |
| -------------------- | ------------------------------------ |
| `npm run dev`        | Dev server with HMR                  |
| `npm run build`      | Type-checks and builds to `dist/`    |
| `npm run preview`    | Serves the production build          |
| `npm run type-check` | Type checking with `vue-tsc`         |
| `npm run lint`       | oxlint + ESLint (with `--fix`)      |
| `npm run format`     | Formats `src/` with Prettier         |

## Routes

| Path          | Name            | View               |
| ------------- | --------------- | ------------------ |
| `/`           | `home.index`    | `HomeView`         |
| `/equipo`     | `home.team`     | `TeamIndexView`    |
| `/productos`  | `home.products` | `ProductIndexView` |
| `/:pathMatch` | `home.notFound` | `NotFoundView`     |

Each route defines `meta.title`, which the router uses to update the document title.
All views except `HomeView` are lazy-loaded (code splitting).

## Structure

Code is organized by _features_ (`app` / `features` / `shared`), same as the other
Vue projects in the course.

```
src/
├── app/                        # App bootstrap and wiring
│   ├── App.vue                 # Layout: background, header, <RouterView/>, and footer
│   ├── main.ts                 # Entry point (mounts the app and the Router)
│   └── router.ts               # Route definitions and titles
├── assets/
│   ├── css/input.css           # Tailwind v4: @theme, @utility, and base styles
│   ├── video/hero.mp4          # Hero background
│   └── Labsoft-Icon.png        # Logo: favicon and header brand
├── features/
│   └── home/                   # Single domain: landing page and its sections
│       ├── components/         # Landing page sections
│       │   ├── HomeHero.vue / HomeCapabilities.vue / HomeProcess.vue / HomeAllies.vue
│       │   └── decorations/    # Ambience only: aria-hidden and pointer-events-none
│       │       ├── BackgroundShell.vue      # Terminal typed by the scroll
│       │       ├── BackgroundHeatmap.vue    # Activity grid
│       │       ├── BackgroundBranches.vue   # Branch graph
│       │       └── TeamBranch.vue           # One semester's branch in the timeline
│       ├── interfaces/         # Content types (team, products, allies)
│       │   ├── AllyInterface.ts
│       │   ├── ProductInterface.ts
│       │   └── TeamMemberInterface.ts
│       └── views/
│           ├── HomeView.vue            # Composes the landing sections
│           ├── TeamIndexView.vue       # Vertical timeline read as a branch history
│           ├── ProductIndexView.vue    # Wide rows with status and stack
│           └── NotFoundView.vue
└── shared/                     # Cross-cutting across features
    ├── components/
    │   ├── AppHeader.vue       # Desktop nav and mobile menu
    │   ├── AppButton.vue       # variant="primary" | "secondary"; with `to` it is a RouterLink
    │   └── PageHeading.vue     # Title from the route's meta.title; `centered` to center it
    └── composables/
        ├── useHeroVideo.ts     # Muted autoplay + prefers-reduced-motion
        └── useScrolled.ts      # The header turns to glass on scroll
```

There are no `services/` or `stores/` yet: the site does not consume an API and its content is static,
so each view declares its data as a typed array. There is no state shared across views.

Only reusable pieces or components with their own logic are extracted. Cards are Tailwind
markup written directly in each view: they are four different variants of the same idea, and a
single shared component would have needed more props than template lines.

## Design system

Tokens and utilities live in `src/assets/css/input.css`. In Tailwind v4 the theme is declared
in CSS with `@theme`, not in a JavaScript config file.

- **Colors**: `emerald-500` (primary), `blue-500` (accent), `purple-500` (secondary) on `slate-950`.
- **Custom utilities**: `glass`, `glass-hover`, `neon-glow`, `gradient-text`.
- **Animations**: `animate-fade-in-up`, registered as `--animate-*` in `@theme`.

### Scroll-driven animations

Nothing here uses JavaScript: everything runs on CSS scroll and view timelines, off the main
thread. Because the scroll position *is* the timeline cursor, scrolling back up rewinds the
animation for free.

`reveal-source` names the timeline the reveal utilities read. Put it on whichever element should
drive them: a section for a background artefact, or a repeated block when each copy has to reveal
as it crosses the viewport.

| Utility            | Effect                                          |
| ------------------ | ----------------------------------------------- |
| `type-on-scroll`   | Types text character by character, with a caret |
| `fade-on-scroll`   | Fades and scales an element in                  |
| `grow-on-scroll`   | Grows a line vertically (`scaleY`)              |
| `draw-on-scroll`   | Draws an SVG stroke (`stroke-dashoffset`)       |
| `reveal-on-scroll` | Cards fade in on entry and out on exit          |
| `blob-scroll`      | Background blobs tied to the page scroll        |

Each element declares its own slice of the timeline through `--draw-from` and `--draw-to`, so the
timing lives next to the element it animates.

All of them sit inside `@supports` and `prefers-reduced-motion: no-preference`, and their **base
state is the finished state**. Where view timelines are unsupported the content renders complete
and still, never empty — inverting that would blank the page on those browsers.

The blob layer in `App.vue` is `sticky`, not `fixed`: a fixed element sits outside the scroll tree
and its timeline never activates. The negative margin keeps it from taking up space in the flow.

## Hero background

The hero loops `src/assets/video/hero.mp4`, muted and without controls. The logic lives in
`useHeroVideo()`, not in the component:

- Browsers only autoplay video that is muted and inline, and refuse when the tab starts hidden, so
  the composable retries on `visibilitychange`.
- A gradient layer covers the video until the first frame arrives. If autoplay is blocked, that
  layer stays and the hero reads as an intentional gradient.
- With `prefers-reduced-motion: reduce` the video never plays.

## Deployment note

The router uses `createWebHashHistory`, so routes live after `#` (e.g. `/#/equipo`).
Any static host can serve `dist/` as-is — no server rewrite is required for deep links.
