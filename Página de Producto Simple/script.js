// Agregar al carrito
const addToCartButton = document.getElementById('addToCartButton');
addToCartButton.addEventListener('click', function() {
    alert('Producto agregado al carrito');
});

// Enviar comentario
const postCommentButton = document.getElementById('postCommentButton');
const commentInput = document.getElementById('commentInput');
const commentList = document.getElementById('commentList');

postCommentButton.addEventListener('click', function() {
    const commentText = commentInput.value.trim();
    if (commentText !== '') {
        agregarComentario(commentText);
        commentInput.value = ''; // Limpiar el campo de entrada
    } else {
        alert('Por favor escribe un comentario');
    }
});

// Función para agregar comentarios a la lista
function agregarComentario(texto) {
    const nuevoComentario = document.createElement('li');
    nuevoComentario.textContent = texto;
    commentList.appendChild(nuevoComentario);
}
