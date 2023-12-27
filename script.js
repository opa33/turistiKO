function openBurgerMenu() {
    var menu = document.querySelector('.menu2');
    menu.classList.toggle('open');
    document.body.style.overflow = 'hidden'; // Запретить прокрутку страницы
    }

    function closeBurgerMenu() {
    var menu = document.querySelector('.menu2');
    menu.classList.remove('open');
    document.body.style.overflow = 'auto'; // Разрешить прокрутку страницы
    }