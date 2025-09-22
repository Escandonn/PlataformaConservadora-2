// Efecto marketing al hacer scroll para el botón de propuestas
window.addEventListener('scroll', function() {
    const btn = document.getElementById('marketing-btn');
    if (!btn) return;
    if (window.scrollY > 120) {
        btn.classList.add('marketing');
    } else {
        btn.classList.remove('marketing');
    }
});

// Animación de aparición para sección "Quiénes Somos"
function animateQuienesSomos() {
    const section = document.getElementById('quienes-somos');
    if (!section) return;
    const title = section.querySelector('.quienes-title-anim');
    const paragraphs = section.querySelectorAll('.quienes-anim');
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < windowHeight - 80) {
        // Mostrar título
        title.classList.add('visible');
        // Mostrar párrafos con retardo
        paragraphs.forEach((p, i) => {
            setTimeout(() => p.classList.add('visible'), 400 + i * 350);
        });
        window.removeEventListener('scroll', animateQuienesSomos);
    }
}
window.addEventListener('scroll', animateQuienesSomos);
window.addEventListener('DOMContentLoaded', animateQuienesSomos);
