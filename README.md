# LabSoft - Migración a Vue.js

Este proyecto ha sido migrado exitosamente de HTML/CSS vanilla a **Vue 3 + Vite + Tailwind CSS** manteniendo el mismo diseño y estilos.

## 🎯 Características de la Migración

- ✅ **Vue 3** con Composition API y SFC (Single File Components)
- ✅ **Vite** como bundler ultrarrápido
- ✅ **Tailwind CSS v3** para estilos reutilizables
- ✅ **TypeScript** para type-safety
- ✅ Componentes reutilizables y modulares
- ✅ Glassmorphism y neon-glow effects preservados
- ✅ Animaciones fade-in y slide-in

## 📁 Estructura del Proyecto

```
src/
├── App.vue                          # Componente principal
├── main.ts                          # Punto de entrada
├── style.css                        # Estilos globales con Tailwind
└── components/
    ├── common/                      # Componentes comunes
    │   ├── AppHeader.vue           # Navegación principal
    │   └── NavLink.vue             # Links de navegación
    ├── buttons/                     # Componentes de botones
    │   ├── PrimaryButton.vue       # Botón primario (emerald)
    │   ├── SecondaryButton.vue     # Botón secundario (glass)
    │   └── SearchButton.vue        # Botón de búsqueda
    ├── cards/                       # Componentes de tarjetas
    │   ├── GlassCard.vue           # Tarjeta con efecto glass
    │   └── InfoCard.vue            # Tarjeta informativa
    ├── sections/                    # Secciones principales
    │   └── HeroSection.vue         # Sección hero
    └── ui/                          # Componentes de UI
        └── BackgroundGradients.vue  # Gradientes de fondo animados
```

## 🚀 Comandos Disponibles

```bash
# Desarrollo con HMR
pnpm dev

# Build para producción
pnpm build

# Preview de la build
pnpm preview

# Lint
pnpm lint
```

## 🎨 Sistema de Diseño

### Colores
- **Primary**: Emerald-500 (#10B981) con efecto neon-glow
- **Accent**: Blue-500 (#3B82F6)
- **Secondary**: Purple-500 (#A855F7)
- **Background**: Slate-950 (#03111d)
- **Glass**: White/10 backdrop con blur

### Componentes Reutilizables

#### PrimaryButton
```vue
<PrimaryButton href="#equipo" :showChevron="true">
  Ver Equipo
</PrimaryButton>
```

#### SecondaryButton
```vue
<SecondaryButton href="#productos">
  Ver Productos
</SecondaryButton>
```

#### InfoCard
```vue
<InfoCard title="Equipo">
  Somos profesores, administrativos y estudiantes...
</InfoCard>
```

#### GlassCard
```vue
<GlassCard>
  <!-- Contenido con efecto glass -->
</GlassCard>
```

## ✨ Características Especiales

### Efectos Visuales
- **Glass Effect**: Fondo translúcido con backdrop blur
- **Neon Glow**: Resplandor verde esmeralda en elementos primarios
- **Gradient Text**: Gradiente de esmeralda a azul en títulos
- **Background Gradients**: Gradientes animados de fondo

### Animaciones
- **Fade In Up**: Aparición con movimiento vertical
- **Slide In Left**: Deslizamiento desde la izquierda

## 🔧 Configuración

### Tailwind Config
El proyecto utiliza Tailwind CSS v3 con tema personalizado en `tailwind.config.js`:

```js
{
  colors: {
    background: '#0f172a',
    foreground: '#f1f5f9',
  }
}
```

### Vite Config
```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173,
    host: true
  }
})
```

## 📝 Notas Importantes

### Cambios desde el original
1. El archivo `terminal-box` se eliminó según los requisitos
2. El `metric-display` se eliminó según los requisitos
3. Los `floating-icons` se eliminaron según los requisitos
4. El `app-footer` se eliminó según los requisitos
5. Se mantiene la estructura modular para fácil expansión futura

### Cómo agregar nuevos componentes

1. Crear el archivo `.vue` en la carpeta correspondiente
2. Exportar como componente reutilizable
3. Importar en `App.vue` o en otros componentes
4. Utilizar con props e eventos según sea necesario

## 🎓 Ejemplo: Agregar una nueva sección

```vue
<!-- src/components/sections/ProductosSection.vue -->
<template>
  <section class="relative z-10 max-w-7xl mx-auto px-6 py-20">
    <h2 class="text-4xl font-bold mb-12">Productos</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <InfoCard v-for="producto in productos" :key="producto.id" :title="producto.nombre">
        {{ producto.descripcion }}
      </InfoCard>
    </div>
  </section>
</template>

<script setup lang="ts">
const productos = [
  { id: 1, nombre: "Producto 1", descripcion: "..." }
]
</script>
```

## 📦 Dependencias Principales

- **vue**: 3.5.40
- **vite**: 8.2.0
- **tailwindcss**: 3.4.19
- **typescript**: 5.7.3

## ✅ Status

- ✅ Componentes creados
- ✅ Estilos Tailwind aplicados
- ✅ Build compilado exitosamente
- ✅ Servidor Vite funcionando
- ✅ Proyecto listo para desarrollo

Para más información sobre Vue 3, visita [vue.dev](https://vue.dev)
Para más información sobre Vite, visita [vitejs.dev](https://vitejs.dev)
