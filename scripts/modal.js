function openModal() {
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function openFile(filePath) {
    const pdfViewer = document.getElementById("pdfViewer");
    const imageViewer = document.getElementById("imageViewer");

    // Verifica si el archivo es un PDF o una imagen
    if (filePath.endsWith(".pdf")) {
        // Mostrar visor de PDF
        pdfViewer.src = filePath;
        pdfViewer.style.display = "block";
        imageViewer.style.display = "none";
    } else if (filePath.endsWith(".jpg") || filePath.endsWith(".png") || filePath.endsWith(".jpeg")) {
        // Mostrar visor de Imagen
        imageViewer.src = filePath;
        imageViewer.style.display = "block";
        pdfViewer.style.display = "none";
    }

    document.getElementById("fileModal").style.display = "block"; // Muestra el modal
}

function closeFileModal() {
    document.getElementById("fileModal").style.display = "none"; // Oculta el modal
    document.getElementById("pdfViewer").src = ""; // Limpia el visor PDF
    document.getElementById("imageViewer").src = ""; // Limpia el visor de imagen
}

// Cierra los modals al hacer clic fuera de ellos
window.onclick = function(event) {
    if (event.target == document.getElementById("modal")) {
        closeModal();
    } else if (event.target == document.getElementById("fileModal")) {
        closeFileModal();
    }
}
