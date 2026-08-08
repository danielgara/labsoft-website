# LabSoft — Website

**SPA/CSR** application for Universidad EAFIT's Software Lab, built with
Vue 3, Vue Router, TypeScript, Vite, and Tailwind CSS v4.

The project was regenerated with `npm create vue@latest` following _Tutorial 03 – SPA/CSR with Vue.js_,
so its structure matches the other Vue projects in the course.

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
| `/aliados`    | `home.allies`   | `AllyIndexView`    |
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
│   └── Labsoft-Icon.png        # Logo: favicon and header brand
├── features/
│   └── home/                   # Single domain: landing page and its sections
│       ├── interfaces/         # Content types (team, products, allies)
│       │   ├── AllyInterface.ts
│       │   ├── ProductInterface.ts
│       │   └── TeamMemberInterface.ts
│       └── views/
│           ├── HomeView.vue    # Hero and landing cards
│           ├── TeamIndexView.vue
│           ├── ProductIndexView.vue
│           ├── AllyIndexView.vue
│           └── NotFoundView.vue
└── shared/                     # Cross-cutting across features
    └── components/
        ├── AppHeader.vue       # Desktop nav and mobile menu
        ├── AppButton.vue       # variant="primary" | "secondary"; with `to` it is a RouterLink
        └── PageHeading.vue     # Title taken from the route's meta.title
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
- **Animations**: `animate-fade-in-up`, `animate-slide-in-left`, registered as `--animate-*` in `@theme`.

## Deployment note

The router uses `createWebHistory`, so the server must rewrite all routes to
`index.html`. Vite (`dev` and `preview`) already does this; in production configure it
according to your hosting provider.
