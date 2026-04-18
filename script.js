/* ============================================================
   INIT EMAILJS
   ============================================================ */

(function () {
  emailjs.init("9eazkhyZansevbriB");
})();

/* ============================================================
   CUSTOM CURSOR
   ============================================================ */

const dot  = document.querySelector(".cursor-dot");
const ring = document.querySelector(".cursor-ring");

let mouseX = window.innerWidth  / 2;
let mouseY = window.innerHeight / 2;
let ringX  = mouseX;
let ringY  = mouseY;
let rafId  = null;

// Mise à jour immédiate du point
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  dot.style.left = mouseX + "px";
  dot.style.top  = mouseY + "px";
});

// Anneau avec lerp pour un suivi fluide
function animateRing() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  ring.style.left = ringX + "px";
  ring.style.top  = ringY + "px";
  rafId = requestAnimationFrame(animateRing);
}
animateRing();

// Masquer le curseur quand il sort de la fenêtre
document.addEventListener("mouseleave", () => {
  dot.style.opacity  = "0";
  ring.style.opacity = "0";
});

document.addEventListener("mouseenter", () => {
  dot.style.opacity  = "1";
  ring.style.opacity = "1";
});

// Effet hover sur les éléments interactifs
const hoverTargets = "a, button, input, select, textarea, label, .cv-tag, .cv-exp-item, .toggle-switch";

document.querySelectorAll(hoverTargets).forEach((el) => {
  el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
  el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
});

/* ============================================================
   THEME TOGGLE
   ============================================================ */

const toggleInput = document.getElementById("theme-toggle");
const html        = document.documentElement;

// Lecture de la préférence sauvegardée ou du système
const savedTheme  = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initTheme   = savedTheme || (prefersDark ? "dark" : "light");

html.setAttribute("data-theme", initTheme);
toggleInput.checked = (initTheme === "dark");

toggleInput.addEventListener("change", () => {
  const next = toggleInput.checked ? "dark" : "light";
  html.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

/* ============================================================
   CONTACT FORM
   ============================================================ */

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Validation HTML5 native
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const btn      = form.querySelector(".submit-btn");
  const btnText  = btn.querySelector(".btn-text");
  const btnArrow = btn.querySelector(".btn-arrow");

  btn.disabled   = true;
  btnText.textContent = "Envoi en cours…";
  btnArrow.textContent = "↻";
  btnArrow.style.animation = "spin 0.8s linear infinite";

  const payload = {
    name:    form.name.value.trim(),
    email:   form.email.value.trim(),
    subject: form.subject.value,
    message: form.message.value.trim(),
  };

  emailjs
    .send("service_7rhl36h", "template_hiolk7f", payload)
    .then(() => {
      btnText.textContent  = "Message envoyé";
      btnArrow.textContent = "✓";
      btnArrow.style.animation = "none";
      btn.style.background = "var(--text-secondary)";
      form.reset();

      setTimeout(resetBtn, 3500);
    })
    .catch((err) => {
      console.error("EmailJS error:", err);
      btnText.textContent  = "Erreur — réessayer";
      btnArrow.textContent = "↺";
      btnArrow.style.animation = "none";
      btn.style.background = "";

      setTimeout(resetBtn, 3500);
    });

  function resetBtn() {
    btnText.textContent  = "Envoyer le message";
    btnArrow.textContent = "→";
    btnArrow.style.animation = "none";
    btn.style.background = "";
    btn.disabled = false;
  }
});

/* ============================================================
   KEYFRAMES INJECTÉS EN JS (spin pour le bouton)
   ============================================================ */

const style = document.createElement("style");
style.textContent = `
  @keyframes spin {
    from { display: inline-block; transform: rotate(0deg); }
    to   { display: inline-block; transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);