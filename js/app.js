// Sample notebook entries — replace with real posts as Alvaro writes them.

const notes = [
  {
    number: 27,
    title: "Why Spain controlled midfield against Italy",
    excerpt:
      "Spain didn't win because of the goals. They won because their midfield always had one extra man. Here is how they did it.",
    date: "2026-07-12",
  },
  {
    number: 26,
    title: "Three things I learned watching Arsenal today",
    excerpt:
      "The full-backs almost never crossed the halfway line at the same time. That small detail kept Arsenal safe all game.",
    date: "2026-07-08",
  },
  {
    number: 25,
    title: "A wonderkid to remember: who is playing like a future star?",
    excerpt:
      "This week I watched a 17-year-old winger who always looks over his shoulder before receiving the ball. Scouts call it scanning.",
    date: "2026-07-03",
  },
];

function renderNotes() {
  const grid = document.getElementById("notes-grid");
  grid.innerHTML = notes
    .map(
      (n) => `
      <article class="note">
        <p class="note-number">Notebook #${n.number}</p>
        <h3>${n.title}</h3>
        <p>${n.excerpt}</p>
        <time datetime="${n.date}">${n.date}</time>
      </article>`
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", renderNotes);
