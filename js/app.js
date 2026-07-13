// Datos de ejemplo — sustituir por una API real (p. ej. football-data.org) más adelante.

const noticias = [
  {
    titulo: "El Real Madrid remonta en el último minuto",
    resumen: "Un gol en el descuento decide un partido vibrante en el Bernabéu.",
    tag: "LaLiga",
    fecha: "2026-07-12",
  },
  {
    titulo: "El Barça presenta a su nuevo fichaje estrella",
    resumen: "El club azulgrana refuerza su mediocampo de cara a la nueva temporada.",
    tag: "Fichajes",
    fecha: "2026-07-11",
  },
  {
    titulo: "España prepara la clasificación para el Mundial",
    resumen: "La selección anuncia la lista de convocados para los próximos amistosos.",
    tag: "Selección",
    fecha: "2026-07-10",
  },
];

const clasificacion = [
  { equipo: "Real Madrid", pj: 38, g: 28, e: 6, p: 4 },
  { equipo: "FC Barcelona", pj: 38, g: 26, e: 7, p: 5 },
  { equipo: "Atlético de Madrid", pj: 38, g: 23, e: 8, p: 7 },
  { equipo: "Athletic Club", pj: 38, g: 20, e: 9, p: 9 },
  { equipo: "Real Sociedad", pj: 38, g: 18, e: 10, p: 10 },
  { equipo: "Real Betis", pj: 38, g: 17, e: 9, p: 12 },
];

const partidos = [
  { local: "Sevilla FC", visitante: "Valencia CF", fecha: "19 jul 2026 · 21:00" },
  { local: "Real Madrid", visitante: "Atlético de Madrid", fecha: "20 jul 2026 · 21:00" },
  { local: "FC Barcelona", visitante: "Athletic Club", fecha: "21 jul 2026 · 19:30" },
];

function renderNoticias() {
  const grid = document.getElementById("news-grid");
  grid.innerHTML = noticias
    .map(
      (n) => `
      <article class="card">
        <div class="card-body">
          <span class="card-tag">${n.tag}</span>
          <h3>${n.titulo}</h3>
          <p>${n.resumen}</p>
          <time datetime="${n.fecha}">${n.fecha}</time>
        </div>
      </article>`
    )
    .join("");
}

function renderClasificacion() {
  const tbody = document.querySelector("#standings-table tbody");
  tbody.innerHTML = clasificacion
    .map((c, i) => {
      const pts = c.g * 3 + c.e;
      return `
      <tr>
        <td>${i + 1}</td>
        <td>${c.equipo}</td>
        <td>${c.pj}</td>
        <td>${c.g}</td>
        <td>${c.e}</td>
        <td>${c.p}</td>
        <td><strong>${pts}</strong></td>
      </tr>`;
    })
    .join("");
}

function renderPartidos() {
  const lista = document.getElementById("fixtures-list");
  lista.innerHTML = partidos
    .map(
      (p) => `
      <li>
        <span>${p.local} <span class="vs">vs</span> ${p.visitante}</span>
        <span class="fecha">${p.fecha}</span>
      </li>`
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderNoticias();
  renderClasificacion();
  renderPartidos();
});
