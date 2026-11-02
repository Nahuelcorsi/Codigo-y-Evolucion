# Código & Evolución

Portfolio personal de **Nahuel Corsi**, hecho con [Astro](https://astro.build).

## Cómo usarlo

```bash
npm install      # una sola vez
npm run dev      # abre http://localhost:4321 y se recarga al guardar
npm run build    # genera el sitio final en dist/
```

## Dónde se cambia cada cosa

| Qué | Archivo |
| --- | --- |
| Bio, frase, links de contacto, habilidades | `src/data/sitio.ts` |
| Proyectos (uno por archivo) | `src/content/proyectos/*.md` |
| Capturas de los proyectos | `src/assets/proyectos/` |
| Colores y estilos generales | `src/styles/global.css` |
| Logo | `src/assets/logo.png` |
| Dominio | `site` en `astro.config.mjs` |

## Agregar un proyecto

1. Poné la captura en `src/assets/proyectos/`.
2. Copiá cualquier archivo de `src/content/proyectos/`, renombralo (el nombre del archivo es la URL) y cambiá los datos.
3. `categoria` puede ser `web`, `software` o `robotica`. Con `destacado: true` aparece en la página de inicio.
