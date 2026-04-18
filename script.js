(function () {
    emailjs.init("9eazkhyZansevbriB");
})();

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const button = form.querySelector("button");
    button.innerText = "Envoi en cours...";
    button.disabled = true;

    const formData = {
        name: form.name.value,
        email: form.email.value,
        subject: form.subject.value,
        message: form.message.value,
    };

    emailjs.send("service_7rhl36h", "template_hiolk7f", formData)
        .then(function () {
            button.innerText = "Message envoyé ✔";
            form.reset();
        })
        .catch(function (error) {
            console.error("Erreur:", error);
            button.innerText = "Erreur, réessayer";
        })
        .finally(() => {
            setTimeout(() => {
                button.innerText = "Envoyer";
                button.disabled = false;
            }, 3000);
        });
});