# LabSoft — Sitio web

Aplicación **SPA/CSR** del Laboratorio de Software de la Universidad EAFIT, construida con
Vue 3, Vue Router, Pinia, TypeScript, Vite y Tailwind CSS v4.

El proyecto fue regenerado con `npm create vue@latest` siguiendo el _Tutorial 03 – SPA/CSR con Vue.js_,
para que la estructura coincida con la de los demás proyectos Vue del curso.

## Stack

| Herramienta     | Uso                                                    |
| --------------- | ------------------------------------------------------ |
| Vue 3           | Framework de UI (Composition API + `<script setup>`)   |
| Vue Router      | Enrutamiento del lado del cliente                      |
| Pinia           | Estado global (contenido del laboratorio)              |
| TypeScript      | Tipado estático                                        |
| Vite            | Servidor de desarrollo y bundler                       |
| Tailwind CSS v4 | Estilos (configurado en CSS, sin `tailwind.config.js`) |
| ESLint + oxlint | Calidad de código                                      |
| Prettier        | Formateo                                               |
| Font Awesome 6  | Iconos (vía CDN en `index.html`)                       |

## Requisitos

Node.js `^22.18.0` o `>=24.12.0`.

## Puesta en marcha

```bash
npm install
```

```bash
npm run dev
```

La aplicación queda en http://localhost:5173.

## Scripts

| Comando              | Qué hace                            |
| -------------------- | ----------------------------------- |
| `npm run dev`        | Servidor de desarrollo con HMR      |
| `npm run build`      | Verifica tipos y compila a `dist/`  |
| `npm run preview`    | Sirve la build de producción        |
| `npm run type-check` | Verificación de tipos con `vue-tsc` |
| `npm run lint`       | oxlint + ESLint (con `--fix`)       |
| `npm run format`     | Formatea `src/` con Prettier        |

## Rutas

| Ruta          | Nombre            | Vista                  |
| ------------- | ----------------- | ---------------------- |
| `/`           | `home.index`      | `HomeView`             |
| `/equipo`     | `equipo.index`    | `TeamIndexView`        |
| `/productos`  | `productos.index` | `ProductIndexView`     |
| `/aliados`    | `aliados.index`   | `AllyIndexView`        |
| `/:pathMatch` | `error.notFound`  | `NotFoundView`         |

Cada ruta define `meta.title`, que el router usa para actualizar el título del documento.
Todas las vistas salvo `HomeView` se cargan de forma diferida (code splitting).

## Estructura

El código se organiza por _features_ (`app` / `features` / `shared`), igual que los demás
proyectos Vue del curso.

```
src/
├── app/                        # Arranque y cableado de la aplicación
│   ├── App.vue                 # Layout: fondo, header, <RouterView/> y footer
│   ├── main.ts                 # Punto de entrada (Pinia + Router)
│   └── router.ts               # Definición de rutas y títulos
├── assets/
│   ├── css/input.css           # Tailwind v4: @theme, @utility y estilos base
│   └── Labsoft-Icon.png        # Logo: favicon y marca del header
├── features/                   # Una carpeta por dominio, con sus vistas
│   ├── home/views/HomeView.vue           # Hero y tarjetas de la portada
│   ├── team/views/TeamIndexView.vue
│   ├── product/views/ProductIndexView.vue
│   ├── ally/views/AllyIndexView.vue
│   └── error/views/NotFoundView.vue
└── shared/                     # Transversal a varias features
    ├── components/
    │   ├── AppHeader.vue       # Navegación de escritorio y menú móvil
    │   ├── AppButton.vue       # variant="primary" | "secondary"; con `to` es un RouterLink
    │   └── PageHeading.vue     # Título tomado de meta.title de la ruta
    ├── interfaces/             # Tipos del contenido (equipo, productos, aliados)
    └── stores/labsoft.ts       # Store de Pinia con equipo, productos y aliados
```

Aún no hay `services/`: el sitio no consume una API, el contenido vive en el store de Pinia.

Solo se extrae a componente lo que se reutiliza entre vistas o tiene lógica propia. Las tarjetas
son markup de Tailwind escrito directamente en cada vista: son cuatro variantes distintas de la
misma idea y un componente único habría necesitado más props que líneas de plantilla.

## Sistema de diseño

Los tokens y utilidades viven en `src/assets/css/input.css`. En Tailwind v4 el tema se declara
en CSS con `@theme`, no en un archivo de configuración de JavaScript.

- **Colores**: `emerald-500` (primario), `blue-500` (acento), `purple-500` (secundario) sobre `slate-950`.
- **Utilidades propias**: `glass`, `glass-hover`, `neon-glow`, `gradient-text`.
- **Animaciones**: `animate-fade-in-up`, `animate-slide-in-left`, registradas como `--animate-*` en `@theme`.

## Nota sobre el despliegue

El router usa `createWebHistory`, así que el servidor debe reescribir todas las rutas hacia
`index.html`. En Vite (`dev` y `preview`) esto ya funciona; en producción hay que configurarlo
según el proveedor de hosting.
