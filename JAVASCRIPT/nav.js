// script.js

let lastScrollTop = 0; // Posição do scroll anterior
const navbar = document.querySelector('.navbar'); // Seleciona a navbar

window.addEventListener('scroll', function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Rolando para baixo
        navbar.classList.add('hidden');
    } else {
        // Rolando para cima
        navbar.classList.remove('hidden');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para evitar valores negativos
});


// script.js

function toggleStats() {
    var stats = document.getElementById('stats');
    stats.classList.toggle('show');
}
