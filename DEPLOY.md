# Guía de despliegue · 24 Segundos

Esta guía te lleva paso a paso desde el código en tu computadora hasta el sitio publicado en internet con panel de administración funcionando. **Todo gratis.**

Tiempo estimado: **15-20 minutos**.

---

## 📋 Lo que necesitas

1. Una cuenta de **GitHub** (gratis) — [github.com](https://github.com)
2. Una cuenta de **Netlify** (gratis) — [netlify.com](https://netlify.com)
3. **Git** instalado en tu computadora — [git-scm.com](https://git-scm.com/downloads)

---

## Paso 1: Subir el código a GitHub

### 1.1 Crear un repositorio nuevo

1. Entra a [github.com](https://github.com) y haz login
2. Haz clic en el botón **"+"** (arriba a la derecha) → **"New repository"**
3. Llénalo así:
   - **Repository name:** `24-segundos` (o el nombre que quieras)
   - **Visibility:** Public o Private (cualquiera funciona)
   - **NO marques** ninguna de las opciones de inicializar (README, .gitignore, license)
4. Clic en **"Create repository"**

GitHub te mostrará una página con instrucciones. Mantenla abierta.

### 1.2 Subir el código

Abre tu terminal en la carpeta del proyecto `24segundos/` y ejecuta:

```bash
git init
git add .
git commit -m "Sitio inicial"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/24-segundos.git
git push -u origin main
```

Reemplaza `TU-USUARIO` con tu nombre de usuario de GitHub. Es posible que te pida login.

✅ Ahora tu código está en GitHub.

---

## Paso 2: Conectar Netlify

### 2.1 Crear nuevo sitio

1. Entra a [app.netlify.com](https://app.netlify.com) y haz login (puedes usar tu cuenta de GitHub para registrarte, es más rápido)
2. Clic en **"Add new site"** → **"Import an existing project"**
3. Elige **"Deploy with GitHub"**
4. Autoriza a Netlify a acceder a tus repositorios
5. Selecciona el repo **`24-segundos`** que acabas de crear

### 2.2 Configurar el build

Netlify detectará automáticamente que es un proyecto Astro. Verifica que estos valores estén bien:

- **Branch:** `main`
- **Build command:** `npm run build`
- **Publish directory:** `dist`

(Si no aparecen, escríbelos manualmente. Ya están en el `netlify.toml`.)

Clic en **"Deploy site"**.

⏳ Netlify empezará a construir el sitio. Tarda 1-2 minutos.

### 2.3 Cambia el nombre del sitio (opcional)

Por defecto Netlify te asigna una URL aleatoria tipo `random-name-12345.netlify.app`. Para cambiarla:

1. En el dashboard del sitio → **"Site configuration"** → **"Change site name"**
2. Cámbiala a `24segundos` o lo que prefieras
3. Tu sitio quedará en `https://24segundos.netlify.app`

### 2.4 Actualiza la URL en el código

Una vez sepas tu URL definitiva, edítala en **dos archivos**:

**`astro.config.mjs`:**
```js
site: 'https://TU-URL.netlify.app',  // Cambia esto
```

**`public/admin/config.yml`:**
```yaml
site_url: https://TU-URL.netlify.app    # Cambia esto
display_url: https://TU-URL.netlify.app # Cambia esto
```

Guarda, haz commit y push:

```bash
git add .
git commit -m "Actualiza URL del sitio"
git push
```

Netlify reconstruirá automáticamente.

---

## Paso 3: Activar el panel de administración (`/admin`)

Aquí está la parte mágica: vamos a habilitar **Decap CMS** para que puedas escribir artículos desde un panel visual sin tocar código.

### 3.1 Activar Netlify Identity

1. En el dashboard de tu sitio en Netlify, ve a la pestaña **"Integrations"** (o "Identity" si te aparece en el menú lateral)
2. Si ves "Identity" directamente, haz clic y luego en **"Enable Identity"**
3. Si no, ve a [app.netlify.com/teams/TU-TEAM/integrations](https://app.netlify.com) y busca "Identity"

### 3.2 Configurar Identity

Una vez activado, ve a **"Identity"** → **"Settings and usage"**:

- **Registration preferences:** Cambia a **"Invite only"** (importante: solo tú decides quién puede entrar al admin)
- **External providers** (opcional): Puedes activar GitHub, Google, etc. para que el login sea más fácil

### 3.3 Activar Git Gateway

Esto es lo que permite a Decap CMS guardar los artículos en GitHub:

1. Aún en **Identity** → **Settings and usage**
2. Baja hasta **"Services"** → **"Git Gateway"**
3. Clic en **"Enable Git Gateway"**

Netlify te pedirá autorizar el acceso a tu repo. Acepta.

### 3.4 Invítate a ti mismo

1. Ve a **Identity** (la pestaña principal)
2. Clic en **"Invite users"**
3. Pon tu email → **"Send"**

Te llegará un correo. Haz clic en el enlace de invitación. Te abrirá tu sitio con un mensaje "Welcome". Define una contraseña.

### 3.5 Entra al admin

Ahora ve a:

```
https://TU-URL.netlify.app/admin
```

Inicia sesión con tu email y la contraseña que acabas de crear. **¡Listo!** Verás el panel de Decap CMS con la lista de artículos.

---

## Paso 4: Escribir tu primer artículo

1. En el panel, clic en **"Artículos"** → **"New Artículo"**
2. Llena los campos:
   - **Título:** El título del artículo
   - **Descripción:** Un resumen corto (1-2 líneas)
   - **Categoría:** Elige una del menú
   - **Autor:** Tu nombre
   - **Fecha:** Hoy
   - **Imagen:** Sube una foto (opcional pero recomendado)
   - **¿Destacar en portada?:** Si activas esto, irá al hero principal
   - **Tags:** Etiquetas separadas (ej: `lebron`, `lakers`)
   - **Contenido:** Escribe el artículo con el editor visual
3. Clic en **"Publish"** → **"Publish now"**

✨ Netlify detectará el nuevo commit y reconstruirá el sitio en 1-2 minutos. Refresca tu home y verás el artículo.

---

## 🔧 Cómo subir imágenes

Dos opciones:

### Desde el panel `/admin`
Cuando edites un artículo, en el campo **"Imagen destacada"** o dentro del editor de contenido, hay un botón para subir imágenes. Decap las sube automáticamente a `public/images/articles/` en tu repo.

### Directamente en GitHub
Sube las fotos a `public/images/articles/` y úsalas en los artículos con la ruta `/images/articles/nombre.jpg`.

**Recomendación:** comprime las imágenes a menos de 200 KB antes de subirlas. Usa [tinypng.com](https://tinypng.com) o [squoosh.app](https://squoosh.app).

---

## 👥 Invitar más editores

Si quieres que otra persona (por ejemplo, un redactor) pueda escribir artículos:

1. Netlify → **Identity** → **"Invite users"**
2. Pon su email → Enviar
3. Le llegará un email para crear contraseña
4. Una vez registrado, podrá entrar a `/admin` y escribir

**Importante:** Cada usuario que invitas cuenta para tu plan gratis de Netlify Identity (1,000 usuarios activos gratis al mes). Más que suficiente.

---

## 🚦 Solución de problemas comunes

### "Failed to load config" al entrar al `/admin`
→ Revisa que `public/admin/config.yml` tenga las URL correctas (site_url y display_url) y que coincidan con tu dominio de Netlify.

### "You don't appear to have access to this Git repository"
→ Ve a Netlify → Identity → Settings → Git Gateway → desactívalo y vuelve a activarlo.

### El build falla en Netlify
→ Revisa los logs en Netlify. El error más común es la versión de Node. Asegúrate de que `netlify.toml` tiene `NODE_VERSION = "20"`.

### Los marcadores en vivo no cargan
→ La API balldontlie.io tiene límite de 5 requests/minuto en el plan gratis. Si recibes muchas visitas simultáneas algunas podrían fallar. Solución: regístrate gratis en balldontlie.io y añade la API key como variable de entorno en Netlify (`BALLDONTLIE_API_KEY`).

---

## 💡 Próximos pasos sugeridos

Una vez que tengas el sitio funcionando:

1. **Dominio propio**: Compra un dominio (~$10/año) y conéctalo en Netlify (Site → Domain management). El SSL/HTTPS es automático.
2. **Google Analytics**: Añade el script en `src/layouts/BaseLayout.astro`
3. **Newsletter real**: Conecta el widget del sidebar a Mailchimp, Buttondown o ConvertKit
4. **Comentarios**: Añade [Giscus](https://giscus.app) (gratis, basado en GitHub Discussions)
5. **Imágenes optimizadas**: Migra de `<img>` a `<Image />` de Astro

---

¡Cualquier duda, revisa la documentación oficial de [Astro](https://docs.astro.build), [Decap CMS](https://decapcms.org/docs/intro) y [Netlify](https://docs.netlify.com)!
