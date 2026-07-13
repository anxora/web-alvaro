// Pinta la web a partir de window.CONTENIDO (data/content.js).
// El contenido se edita desde el panel de administración (admin/).

const C = window.CONTENIDO;

function esc(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderPortada() {
  document.getElementById("hero-kicker").textContent = C.portada.kicker;
  document.getElementById("hero-title").innerHTML = esc(C.portada.titulo).replaceAll("\n", "<br>");
  document.getElementById("hero-sub").textContent = C.portada.subtitulo;
  document.getElementById("hero-btn").textContent = C.portada.boton;
}

function renderNotas() {
  const grid = document.getElementById("notes-grid");
  const notas = [...C.notas].sort((a, b) => b.numero - a.numero);
  grid.innerHTML = notas
    .map(
      (n) => `
      <a class="note" href="nota.html?n=${encodeURIComponent(n.numero)}">
        <p class="note-number">Minuto ${esc(n.numero)}&prime;</p>
        <h3>${esc(n.titulo)}</h3>
        <p>${esc(n.resumen)}</p>
        <time datetime="${esc(n.fecha)}">${esc(n.fecha)}</time>
      </a>`
    )
    .join("");
}

function renderTemas() {
  document.getElementById("topics").innerHTML = C.temas
    .map((t) => `<div class="topic"><h3>${esc(t.titulo)}</h3><p>${esc(t.texto)}</p></div>`)
    .join("");
}

function renderSobreMi() {
  document.getElementById("about-lead").textContent = C.sobreMi.saludo;
  document.getElementById("about-text").textContent = C.sobreMi.texto;
  document.getElementById("about-sign").textContent = C.sobreMi.firma;
}

function renderPie() {
  document.getElementById("footer-tag").textContent = C.pie.lema;
}

document.addEventListener("DOMContentLoaded", () => {
  renderPortada();
  renderNotas();
  renderTemas();
  renderSobreMi();
  renderPie();
});
