# 24 Segundos · Noticias NBA en Español

Sitio web profesional de noticias NBA en español, inspirado en ESPN, Bleacher Report y The Athletic.

**Stack:**
- [Astro](https://astro.build) — Framework estático ultra rápido
- [Decap CMS](https://decapcms.org) — Panel de administración gratuito (antes Netlify CMS)
- [balldontlie.io](https://docs.balldontlie.io) — API NBA en tiempo real (gratis)
- Netlify — Hosting (gratis)

---

## 🚀 Inicio rápido (local)

Necesitas **Node.js 20** o superior.

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321) en tu navegador.

---

## 📁 Estructura del proyecto

```
24segundos/
├── public/
│   ├── admin/              ← Panel de Decap CMS (escribir artículos)
│   │   ├── index.html
│   │   └── config.yml      ← Configuración del CMS
│   ├── images/             ← Imágenes (las que subas desde el admin)
│   └── favicon.svg
├── src/
│   ├── components/         ← Componentes Astro reutilizables
│   ├── content/
│   │   ├── articles/       ← Aquí viven los artículos en Markdown
│   │   └── config.ts       ← Schema de los artículos
│   ├── layouts/            ← Plantillas de página
│   ├── lib/
│   │   ├── nba-api.js      ← Cliente de balldontlie.io
│   │   └── teams.js        ← Datos de los 30 equipos NBA
│   ├── pages/              ← Rutas del sitio
│   │   ├── index.astro     ← Homepage
│   │   ├── noticias/       ← Listado y detalle de artículos
│   │   ├── equipos/        ← Páginas de equipos
│   │   ├── categoria/      ← Páginas por categoría
│   │   ├── estadisticas.astro
│   │   ├── clasificaciones.astro
│   │   └── calendario.astro
│   └── styles/global.css
├── astro.config.mjs
├── netlify.toml
└── package.json
```

---

## 📝 Cómo escribir artículos

Tienes dos formas:

### Opción A: Desde el panel `/admin` (recomendado)

Una vez desplegado el sitio en Netlify (ver guía abajo), entra a:

```
https://tu-sitio.netlify.app/admin
```

Inicia sesión con el usuario que invitaste y verás un editor visual. Cada artículo que publiques se guardará en GitHub y el sitio se reconstruirá automáticamente.

### Opción B: Crear archivos `.md` directamente

Crea un archivo nuevo en `src/content/articles/` con el siguiente formato:

```markdown
---
title: "Título del artículo"
description: "Resumen corto para previews y SEO"
category: "NBA"  # NBA | Rumores | Traspasos | Playoffs | Draft | Opinión
author: "Tu Nombre"
date: 2026-06-10
image: "/images/articles/foto.jpg"  # Opcional
featured: false  # true para destacar en portada
tags: ["lakers", "lebron"]
---

# Aquí va el contenido en Markdown

Puedes usar **negritas**, *cursivas*, [enlaces](https://...), listas, citas, tablas...
```

---

## 🌐 Desplegar en GitHub + Netlify (gratis)

Sigue **DEPLOY.md** paso a paso. En resumen:

1. Crea un repositorio en GitHub y sube este código
2. Conecta el repo a Netlify
3. Activa Netlify Identity + Git Gateway
4. Invita a editores al `/admin`

---

## 🏀 Datos en vivo de la NBA

El sitio usa [balldontlie.io](https://docs.balldontlie.io) para:
- Marcadores en vivo (strip superior)
- Próximos partidos (sidebar)
- Calendario completo
- Resultados recientes

**El plan gratuito** funciona sin API key, pero tiene límite de 5 requests/minuto. Si tu sitio crece, regístrate gratis en balldontlie.io y obtén una key con más capacidad. Después, añádela como variable de entorno en Netlify: `BALLDONTLIE_API_KEY`.

---

## 🎨 Personalización

- **Colores y tema**: Edita `src/styles/global.css` (variables CSS al inicio)
- **Logo**: Edita `src/components/Header.astro`
- **Navegación**: Edita el array `navItems` en `src/components/Header.astro`
- **Footer**: Edita `src/components/Footer.astro`
- **Equipos**: Edita `src/lib/teams.js`

---

## 📜 Comandos

| Comando | Descripción |
|---------|-------------|
| `npm install` | Instala dependencias |
| `npm run dev` | Servidor local en :4321 |
| `npm run build` | Genera el sitio en `/dist` |
| `npm run preview` | Previsualiza el build |

---

Hecho con ❤️ para los hinchas hispanohablantes de la NBA.
