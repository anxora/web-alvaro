# 90 Minutos de Álvaro ⚽

> El fútbol, minuto a minuto.

Análisis de partidos, táctica y futuras estrellas — el diario futbolero de Álvaro. Cada artículo es un "minuto" de su diario (p. ej. *Minuto 27′ — Por qué España controló el centro del campo contra Italia*).

## Estructura

- `index.html` — página principal (minutos, temas, sobre mí)
- `nota.html` — página de cada minuto (artículo completo), `nota.html?n=27`
- `data/content.json` — TODO el contenido editable (fuente de la verdad)
- `data/content.js` — el mismo contenido, generado para que lo lea la web
- `admin/` — panel de administración local
- `css/styles.css` — diseño de cuaderno (papel, tinta, verde oscuro)
- `js/app.js` — pinta la web a partir de `data/content.js`
- `img/` — sticker de Álvaro, logo, banner, avatar y favicon «90′»

## Editar el contenido (panel de administración)

Doble clic en **`Administrar.command`** (o `python3 admin/server.py`). Se abre el panel en <http://localhost:8090/admin>:

- **Minutos**: crear, editar y eliminar artículos (número, título, resumen, texto completo y fecha)
- **Portada, Temas, Sobre mí y Pie**: todos los textos de la web
- **💾 Guardar** escribe los cambios en `data/` (vista previa en <http://localhost:8090/>)
- **🚀 Publicar** hace commit y push a GitHub automáticamente

## Ver en local

Con el panel arrancado, la web se sirve en <http://localhost:8090/>. También puedes abrir `index.html` directamente en el navegador.

## Próximos pasos

- Publicar con GitHub Pages
- Registrar el mismo nombre en YouTube, X, Instagram y TikTok
