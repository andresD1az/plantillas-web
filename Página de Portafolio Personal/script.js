// Formulario de contacto
const contactForm = document.getElementById('contactForm');
const responseMessage = document.getElementById('responseMessage');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (nombre && email && mensaje) {
        responseMessage.textContent = '¡Gracias por tu mensaje! Te responderemos pronto.';
        contactForm.reset();
    } else {
        responseMessage.textContent = 'Por favor, completa todos los campos.';
        responseMessage.style.color = 'red';
    }
});
