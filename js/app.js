// Entradas del diario — sustituir por las notas reales de Álvaro cuando las escriba.

const notas = [
  {
    numero: 27,
    titulo: "Por qué España controló el centro del campo contra Italia",
    resumen:
      "España no ganó por los goles. Ganó porque en el mediocampo siempre tenía un hombre más. Así lo consiguieron.",
    fecha: "2026-07-12",
  },
  {
    numero: 26,
    titulo: "Tres cosas que aprendí viendo al Arsenal",
    resumen:
      "Los laterales casi nunca pasaban del centro del campo a la vez. Ese pequeño detalle mantuvo al Arsenal seguro todo el partido.",
    fecha: "2026-07-08",
  },
  {
    numero: 25,
    titulo: "Un futuro crack: ¿quién juega ya como una estrella?",
    resumen:
      "Esta semana vi a un extremo de 17 años que siempre mira por encima del hombro antes de recibir. Los ojeadores lo llaman escanear.",
    fecha: "2026-07-03",
  },
];

function renderNotas() {
  const grid = document.getElementById("notes-grid");
  grid.innerHTML = notas
    .map(
      (n) => `
      <article class="note">
        <p class="note-number">Minuto ${n.numero}&prime;</p>
        <h3>${n.titulo}</h3>
        <p>${n.resumen}</p>
        <time datetime="${n.fecha}">${n.fecha}</time>
      </article>`
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", renderNotas);
