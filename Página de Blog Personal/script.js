// Manejador de comentarios
const commentForm = document.getElementById('commentForm');
const commentResponse = document.getElementById('commentResponse');

commentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const comment = document.getElementById('comment').value.trim();

    if (comment) {
        commentResponse.textContent = '¡Gracias por tu comentario! Será visible pronto.';
        commentResponse.style.color = 'green';
        commentForm.reset();
    } else {
        commentResponse.textContent = 'Por favor, escribe un comentario antes de enviar.';
        commentResponse.style.color = 'red';
    }
});
