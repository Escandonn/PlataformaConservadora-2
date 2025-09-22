// Animación de aparición para sección "Nuestras Propuestas" con efectos empresariales y marketing
function animatePropuestas() {
    const section = document.querySelector('.bg-light-gray');
    if (!section) return;
    const title = section.querySelector('.propuestas-title-anim');
    const cards = section.querySelectorAll('.propuesta-anim');
    const icons = section.querySelectorAll('.propuesta-icon');
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    // Cambia el umbral para que la animación se active más abajo
    if (rect.top < windowHeight - 200) {
        // Mostrar título
        title.classList.add('visible');
        // Mostrar tarjetas con retardo y efecto (más rápido)
        cards.forEach((card, i) => {
            setTimeout(() => {
                card.classList.add('visible');
                // Pop especial para el icono
                const icon = card.querySelector('.propuesta-icon');
                if (icon) {
                    icon.style.animationDelay = (0.1 + i * 0.12) + 's';
                    icon.style.animationPlayState = 'running';
                }
            }, 200 + i * 180);
        });
        window.removeEventListener('scroll', animatePropuestas);
    }
}
window.addEventListener('scroll', animatePropuestas);
window.addEventListener('DOMContentLoaded', animatePropuestas);
