// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x'); // Alterna a classe do ícone
    navbar.classList.toggle('active'); // Alterna a classe de visibilidade da barra de navegação
});

// Scroll section
let sections = document.querySelectorAll('section'); // Seleciona todas as seções
let navLinks = document.querySelectorAll('header nav a'); // Seleciona todos os links de navegação

window.addEventListener('scroll', () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 100; // Ajuste para o início da seção
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        // Verifica se a seção está visível
        if (top >= offset && top < offset + height) {
            // Remove a classe 'active' de todos os links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Adiciona a classe 'active' ao link correspondente
            document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');

            sec.classList.add('show-animate');
        } 
    });

    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', top > 100);

    // Remove toggle icon and navbar when click navbar links (scroll)
    // Se não for necessário, pode comentar ou remover as duas linhas abaixo
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    //animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
});
