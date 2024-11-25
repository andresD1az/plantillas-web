// Selección de elementos del formulario
const formulario = document.getElementById('formularioContacto');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const mensaje = document.getElementById('mensaje');
const errorNombre = document.getElementById('errorNombre');
const errorEmail = document.getElementById('errorEmail');
const errorMensaje = document.getElementById('errorMensaje');

// Validación de nombre
function validarNombre() {
    if (nombre.value.trim() === '') {
        errorNombre.textContent = 'El nombre es obligatorio';
        errorNombre.style.display = 'block';
        return false;
    } else {
        errorNombre.style.display = 'none';
        return true;
    }
}

// Validación de email
function validarEmail() {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '') {
        errorEmail.textContent = 'El correo electrónico es obligatorio';
        errorEmail.style.display = 'block';
        return false;
    } else if (!regexEmail.test(email.value)) {
        errorEmail.textContent = 'El correo electrónico no es válido';
        errorEmail.style.display = 'block';
        return false;
    } else {
        errorEmail.style.display = 'none';
        return true;
    }
}

// Validación de mensaje
function validarMensaje() {
    if (mensaje.value.trim() === '') {
        errorMensaje.textContent = 'El mensaje no puede estar vacío';
        errorMensaje.style.display = 'block';
        return false;
    } else {
        errorMensaje.style.display = 'none';
        return true;
    }
}

// Validación del formulario al enviar
formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const esNombreValido = validarNombre();
    const esEmailValido = validarEmail();
    const esMensajeValido = validarMensaje();

    if (esNombreValido && esEmailValido && esMensajeValido) {
        alert('Formulario enviado correctamente');
        formulario.reset();
    }
});

// Eventos de validación en tiempo real
nombre.addEventListener('input', validarNombre);
email.addEventListener('input', validarEmail);
mensaje.addEventListener('input', validarMensaje);
