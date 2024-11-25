// Enviar formulario de contacto
const form = document.getElementById('contact-form');
const responseMessage = document.getElementById('form-response');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        responseMessage.textContent = "¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.";
        responseMessage.style.color = "green";
        form.reset();
    } else {
        responseMessage.textContent = "Por favor, complete todos los campos.";
        responseMessage.style.color = "red";
    }
});
