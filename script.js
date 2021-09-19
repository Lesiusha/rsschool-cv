window.addEventListener('load', function() {
    const menu__burger = document.querySelector('.menu__burger');
    const menu = document.querySelector('.menu');

    menu__burger.addEventListener('click', function() {
        menu.classList.toggle('active');
    });

});