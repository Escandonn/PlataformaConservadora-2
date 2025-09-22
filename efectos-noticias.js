// Carrusel de noticias con efecto card y animación de aparición
const noticiasImgs = [
    '../home/image.png',
    '../home/logo.jpg',
    '../home/image.png'
];
const noticiasCaptions = [
    'Reunión con líderes empresariales para impulsar la recuperación económica.',
    'Jornada de voluntariado: apoyo a familias vulnerables.',
    'Encuentro educativo: promoviendo valores y calidad.'
];
const noticiasSubtitles = [
    'Actualidad y Eventos',
    'Voluntariado y Comunidad',
    'Educación y Valores'
];
const noticiasDescs = [
    'Mantente informado sobre las acciones, logros y actividades más recientes del Partido Conservador. Aquí compartimos noticias relevantes, jornadas sociales y encuentros con la comunidad y el sector empresarial.',
    'Nuestros voluntarios trabajan para mejorar la vida de las familias vulnerables y fortalecer el tejido social.',
    'Impulsamos la formación en valores y la calidad educativa para el futuro del país.'
];
let noticiasIndex = 0;

function showNoticiasCard(idx) {
    const img = document.getElementById('carousel-img');
    const caption = document.getElementById('carousel-caption');
    const card = document.getElementById('carousel-card');
    const subtitle = document.getElementById('noticias-subtitle');
    const desc = document.getElementById('noticias-desc');
    if (!img || !caption || !card || !subtitle || !desc) return;
    card.classList.remove('active');
    setTimeout(() => {
        img.src = noticiasImgs[idx];
        caption.textContent = noticiasCaptions[idx];
        subtitle.textContent = noticiasSubtitles[idx];
        desc.textContent = noticiasDescs[idx];
        card.classList.add('active');
    }, 200);
}

setInterval(() => {
    noticiasIndex = (noticiasIndex + 1) % noticiasImgs.length;
    showNoticiasCard(noticiasIndex);
}, 3500);

window.addEventListener('DOMContentLoaded', () => {
    showNoticiasCard(noticiasIndex);
    // Animación de aparición para subtítulo, descripción y carrusel
    const noticiasAnims = document.querySelectorAll('.noticias-anim');
    noticiasAnims.forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), 300 + i * 250);
    });
});
