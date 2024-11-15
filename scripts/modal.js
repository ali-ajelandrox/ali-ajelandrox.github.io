// Función para abrir el modal con la galería
function openModal() {
    document.getElementById("modal").style.display = "block";
}

// Función para cerrar el modal de la galería
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Función para abrir un archivo (PDF o Imagen)
function openFile(filePath) {
    const pdfViewer = document.getElementById("pdfViewer");
    const imageViewer = document.getElementById("imageViewer");

    // Verifica si el archivo es un PDF o una imagen
    if (filePath.endsWith(".pdf")) {
        // Mostrar visor de PDF
        loadPDF(filePath);
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

// Función para cargar el PDF usando PDF.js
function loadPDF(url) {
    const pdfViewer = document.getElementById("pdfViewer");
    pdfViewer.innerHTML = '';  // Limpia cualquier contenido previo

    // Cargar el PDF usando PDF.js
    pdfjsLib.getDocument(url).promise.then(function(pdf) {
        // Obtener la primera página
        pdf.getPage(1).then(function(page) {
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");

            // Obtener las dimensiones del viewport y el tamaño del PDF
            const viewport = page.getViewport({ scale: 1 });

            // Ajustar el tamaño del canvas de manera automática
            const scale = Math.min(window.innerWidth / viewport.width, 1); // Escalar basado en el ancho de la pantalla
            canvas.height = viewport.height * scale;
            canvas.width = viewport.width * scale;

            // Renderizar la página del PDF
            page.render({
                canvasContext: context,
                viewport: page.getViewport({ scale: scale }) // Escala dinámica
            });

            // Agregar el canvas al visor de PDF
            pdfViewer.appendChild(canvas);
        });
    });
}

// Función para cerrar el modal del archivo (PDF o imagen)
function closeFileModal() {
    document.getElementById("fileModal").style.display = "none"; // Oculta el modal
    document.getElementById("pdfViewer").innerHTML = ""; // Limpia el visor de PDF
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
