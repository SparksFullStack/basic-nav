let mainNav = document.getElementById('js-menu');
let toggler = document.getElementById('js-navbar-toggle');

toggler.addEventListener('click', function() {
    mainNav.classList.toggle('active');
});