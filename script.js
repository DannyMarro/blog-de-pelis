function openTrailer(videoUrl) {
    const trailerFrame = document.getElementById("trailer");
    trailerFrame.src = videoUrl; // Establece la URL del video
    document.getElementById("videoModal").style.display = "flex"; // Muestra el modal
}

function closeModal() {
    const trailerFrame = document.getElementById("trailer");
    trailerFrame.src = ""; // Detiene el video al cerrar
    document.getElementById("videoModal").style.display = "none"; // Oculta el modal
}

// Cierra el modal si se hace clic fuera del contenido del modal
window.onclick = function(event) {
    const modal = document.getElementById("videoModal");
    if (event.target == modal) {
        closeModal();
    }
}
