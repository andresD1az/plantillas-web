// Manejador de envío de formulario de contacto
const contactForm = document.getElementById('contactForm');
const contactResponse = document.getElementById('contactResponse');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (nombre && email && mensaje) {
        contactResponse.textContent = '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.';
        contactResponse.style.color = 'green';
        contactForm.reset();
    } else {
        contactResponse.textContent = 'Por favor, completa todos los campos.';
        contactResponse.style.color = 'red';
    }
});
