// Obtener los elementos del formulario
const formulario = document.getElementById('contactoForm');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const mensaje = document.getElementById('mensaje');

// Función para mostrar mensajes de error
function mostrarError(input, mensaje) {
    const formGroup = input.parentElement;
    const small = formGroup.querySelector('small');
    small.innerText = mensaje;
    small.classList.add('error');
    input.classList.add('error');
}

// Función para limpiar mensajes de error
function limpiarError(input) {
    const formGroup = input.parentElement;
    const small = formGroup.querySelector('small');
    small.classList.remove('error');
    input.classList.remove('error');
}

// Validaciones específicas para cada campo
function validarNombre() {
    const nombreValor = nombre.value.trim();
    if (nombreValor.length < 3) {
        mostrarError(nombre, 'El nombre debe tener al menos 3 caracteres');
    } else {
        limpiarError(nombre);
    }
}

function validarEmail() {
    const emailValor = email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValor)) {
        mostrarError(email, 'Ingresa un correo válido');
    } else {
        limpiarError(email);
    }
}

function validarMensaje() {
    const mensajeValor = mensaje.value.trim();
    if (mensajeValor.length < 10) {
        mostrarError(mensaje, 'El mensaje debe tener al menos 10 caracteres');
    } else {
        limpiarError(mensaje);
    }
}

// Evento para validar en tiempo real
nombre.addEventListener('input', validarNombre);
email.addEventListener('input', validarEmail);
mensaje.addEventListener('input', validarMensaje);

// Validación en el submit del formulario
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    validarNombre();
    validarEmail();
    validarMensaje();

    // Verificar si hay errores antes de enviar
    const errores = document.querySelectorAll('.error');
    if (errores.length === 0) {
        alert('Formulario enviado correctamente');
        formulario.reset();
    }
});
