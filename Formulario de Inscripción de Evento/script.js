// Manejador del formulario de inscripción
const registrationForm = document.getElementById('registrationForm');
const responseMessage = document.getElementById('responseMessage');

registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const tipoEntrada = document.getElementById('tipoEntrada').value;

    if (nombre && email && telefono && tipoEntrada) {
        responseMessage.textContent = '¡Inscripción realizada con éxito! Nos pondremos en contacto contigo.';
        responseMessage.style.color = 'green';
        registrationForm.reset();
    } else {
        responseMessage.textContent = 'Por favor, completa todos los campos.';
        responseMessage.style.color = 'red';
    }
});
