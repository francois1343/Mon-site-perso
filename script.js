/* ============================================================
   THEME TOGGLE
   ============================================================ */

const toggleInput = document.getElementById("theme-toggle");
const html        = document.documentElement;

// Le blanc est le thème initial ; le choix d'un visiteur régulier reste mémorisé.
let savedTheme;
try {
  savedTheme = localStorage.getItem("theme");
} catch (_) { /* Le stockage local est facultatif. */ }
const initTheme = savedTheme === "dark" ? "dark" : "light";
const themeColor = document.querySelector('meta[name="theme-color"]');

function applyTheme(theme) {
  const isDark = theme === "dark";
  html.setAttribute("data-theme", theme);
  toggleInput.checked = isDark;
  toggleInput.setAttribute("aria-label", isDark ? "Activer le thème blanc" : "Activer le thème noir");
  themeColor?.setAttribute("content", isDark ? "#0a0a0a" : "#f5f5f3");
}

applyTheme(initTheme);

toggleInput.addEventListener("change", () => {
  const next = toggleInput.checked ? "dark" : "light";
  applyTheme(next);
  try {
    localStorage.setItem("theme", next);
  } catch (_) { /* Le bouton reste utilisable sans stockage local. */ }
});

/* ============================================================
   CONTACT FORM
   ============================================================ */

const form = document.getElementById("contact-form");

// Une indisponibilité du service de contact ne bloque pas le sélecteur de thème.
if (window.emailjs) {
  window.emailjs.init("9eazkhyZansevbriB");
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Validation HTML5 native
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  if (!window.emailjs) {
    document.getElementById("form-status").textContent =
      "Le formulaire est indisponible. Écrivez-moi directement avec le lien e-mail ci-dessous.";
    return;
  }

  const btn      = form.querySelector(".submit-btn");
  const btnText  = btn.querySelector(".btn-text");
  const btnArrow = btn.querySelector(".btn-arrow");

  btn.disabled   = true;
  btnText.textContent = "Envoi en cours…";
  btnArrow.textContent = "↻";
  btnArrow.style.animation = "spin 0.8s linear infinite";
  document.getElementById("form-status").textContent = "Envoi du message en cours…";

  const payload = {
    name:    form.elements.namedItem("name").value.trim(),
    email:   form.elements.namedItem("email").value.trim(),
    subject: form.elements.namedItem("subject").value,
    message: form.elements.namedItem("message").value.trim(),
  };

  emailjs
    .send("service_7rhl36h", "template_hiolk7f", payload)
    .then(() => {
      btnText.textContent  = "Message envoyé";
      btnArrow.textContent = "✓";
      btnArrow.style.animation = "none";
      btn.style.background = "var(--text-secondary)";
      form.reset();
      document.getElementById("form-status").textContent = "Votre message a bien été envoyé.";

      setTimeout(resetBtn, 3500);
    })
    .catch((err) => {
      console.error("EmailJS error:", err);
      btnText.textContent  = "Erreur — réessayer";
      btnArrow.textContent = "↺";
      btnArrow.style.animation = "none";
      btn.style.background = "";
      document.getElementById("form-status").textContent =
        "Le message n'a pas pu être envoyé. Réessayez ou utilisez le lien e-mail ci-dessous.";

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
