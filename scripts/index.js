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
