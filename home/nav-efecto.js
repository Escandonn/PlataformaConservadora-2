// Efecto de transición de color y fondo en los enlaces del nav hasta el login

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links li a');
    const loginBtn = document.querySelector('.login-btn');
    const highlightBg = '#C9A646'; // color de fondo del login
    const highlightColor = '#fff'; // color de texto del login
    const loginFinalBg = '#1A237E'; // color final del login
    const originalBg = [];
    const originalColor = [];

    // Guardar color y fondo original de cada enlace
    navLinks.forEach(link => {
        originalBg.push(link.style.backgroundColor || '');
        originalColor.push(link.style.color || '');
    });

    function animateNavLinks(index, onFinish) {
        if (index < navLinks.length) {
            navLinks[index].style.transition = 'background-color 1.2s, color 1.2s';
            navLinks[index].style.backgroundColor = highlightBg;
            navLinks[index].style.color = highlightColor;
            setTimeout(() => animateNavLinks(index + 1, onFinish), 400);
        } else {
            // Al final, resalta el login permanentemente
            loginBtn.style.transition = 'background-color 1.2s, color 1.2s';
            loginBtn.style.backgroundColor = loginFinalBg;
            loginBtn.style.color = '#fff';
            // Restaurar solo los demás enlaces
            setTimeout(() => {
                navLinks.forEach((link, i) => {
                    if (!link.classList.contains('login-btn')) {
                        link.style.backgroundColor = originalBg[i];
                        link.style.color = originalColor[i];
                    }
                });
                if (onFinish) onFinish();
            }, 1800);
        }
    }

    // Máquina de escribir para el título y subtítulo
    function typeWriter(element, text, speed, callback) {
        let i = 0;
        function typing() {
            if (i <= text.length) {
                element.textContent = text.substring(0, i);
                i++;
                setTimeout(typing, speed);
            } else if (callback) {
                callback();
            }
        }
        typing();
    }

    const heroTitle = document.querySelector('.hero-content h1');
    const heroSubtitle = document.querySelector('.hero-content p');
    const titleText = 'Por la Tradición y el Futuro';
    const subtitleText = 'Unidos por los valores que construyen una sociedad sólida y próspera. Conoce nuestras propuestas para un mejor país.';

    // Limpiar texto inicial
    if (heroTitle && heroSubtitle) {
        heroTitle.textContent = '';
        heroSubtitle.textContent = '';
        // Primero el efecto nav, luego la máquina de escribir
        animateNavLinks(0, function() {
            setTimeout(function() {
                typeWriter(heroTitle, titleText, 80, function() {
                    setTimeout(function() {
                        typeWriter(heroSubtitle, subtitleText, 36, function() {
                            // Efecto: bajar la página después de la máquina de escribir
                            window.scrollBy({
                                top: 100, // Ajusta la cantidad de scroll según lo que necesites
                                left: 0,
                                behavior: 'smooth'
                            });
                        });
                    }, 400);
                });
            }, 400);
        });
    } else {
        // Si no hay hero, solo nav
        animateNavLinks(0);
    }
});
