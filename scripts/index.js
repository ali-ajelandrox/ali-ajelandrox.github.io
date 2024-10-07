document.addEventListener('DOMContentLoaded', () => {
    const applyHoverAnimation = (selector) => {
        const elements = document.querySelectorAll(selector);

        elements.forEach(element => {
            element.addEventListener('mouseover', () => {
                element.classList.remove('not-hovered');
                element.classList.add('hovered');
            });

            element.addEventListener('mouseout', () => {
                element.classList.remove('hovered');
                element.classList.add('not-hovered');
            });
        });
    };

    applyHoverAnimation('.proyects');
    applyHoverAnimation('.about');
});


document.addEventListener('DOMContentLoaded', () => {
    const applyAnimation = (selector) => {
        const elements = document.querySelectorAll(selector);

        elements.forEach(element => {
            element.classList.add('animate');
        });
    };

    applyAnimation('.aside .img-button');
});


    // Scroll automático hacia abajo
    const scrollToBottom = () => {
        window.scrollBy(0, 1); // Desplazamiento hacia abajo en píxeles
        if ((window.innerHeight + window.scrollY) < document.body.offsetHeight) {
            requestAnimationFrame(scrollToBottom); // Continúa el scroll
        }
    };

    window.onload = () => {
        scrollToBottom(); // Inicia el scroll automático al cargar la página
    };

