// Simulación de carga de contenido en el panel de control
document.getElementById('inicio').addEventListener('click', function() {
    mostrarContenido('Inicio', 'Bienvenido al panel de control. Aquí puedes administrar y configurar opciones.');
});

document.getElementById('usuarios').addEventListener('click', function() {
    mostrarContenido('Usuarios', 'Lista y administración de usuarios registrados en el sistema.');
});

document.getElementById('estadisticas').addEventListener('click', function() {
    mostrarContenido('Estadísticas', 'Visualización de datos y métricas de la plataforma.');
});

document.getElementById('configuracion').addEventListener('click', function() {
    mostrarContenido('Configuración', 'Opciones para personalizar el sistema.');
});

// Función para mostrar contenido en la sección principal
function mostrarContenido(titulo, texto) {
    const contenido = document.getElementById('contenido');
    contenido.innerHTML = `<h2>${titulo}</h2><p>${texto}</p>`;
}
