// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

// Footer year
document.getElementById("year").textContent = String(new Date().getFullYear());

// Simple counters (demo)
function animateNumber(el, target, duration = 800) {
  const start = 0;
  const startTime = performance.now();

  function tick(now) {
    const t = Math.min((now - startTime) / duration, 1);
    const val = Math.floor(start + (target - start) * t);
    el.textContent = String(val);
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

animateNumber(document.getElementById("years"), 2);
animateNumber(document.getElementById("apps"), 2);
animateNumber(document.getElementById("projectsCount"), 3);

// Project search filter
const search = document.getElementById("search");
const grid = document.getElementById("projectGrid");
const resultText = document.getElementById("resultText");

function filterProjects() {
  const q = (search.value || "").trim().toLowerCase();
  const cards = Array.from(grid.querySelectorAll(".project"));

  let visible = 0;
  for (const card of cards) {
    const text = (card.innerText + " " + (card.dataset.tags || "")).toLowerCase();
    const show = text.includes(q);
    card.style.display = show ? "" : "none";
    if (show) visible++;
  }

  resultText.textContent = q
    ? `Showing ${visible} project(s) for "${q}".`
    : "";
}

search?.addEventListener("input", filterProjects);

// Fake contact form submit
const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  formMsg.textContent = "✅ Message sent (demo). Add a backend to make this real.";
  form.reset();
});