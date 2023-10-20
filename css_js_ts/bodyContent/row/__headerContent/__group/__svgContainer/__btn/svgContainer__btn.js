const menuToggleFirst = document.getElementById('toggle-first');
const menuToggleSecond = document.getElementById('toggle-second');
const firstButton = document.getElementById('first-button');
const thirdButton = document.getElementById('third-button');
const menu = document.getElementById('menu');
const anotherMenuFirst = document.getElementById('another-menu-first');
const anotherMenuSecond = document.getElementById('another-menu-second');

menuToggleFirst.addEventListener('click', () => {
    menu.classList.add('show');
    menu.style.top = '80px';
    menu.style.opacity = '1';
    menuToggleFirst.style.display = 'none';
    firstButton.style.display = 'none';
    thirdButton.style.display = 'block';
    menuToggleSecond.style.display = 'block';
});

// 
menuToggleSecond.addEventListener('click', () => {
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        if (anotherMenuFirst.classList.contains('show')) {
            anotherMenuFirst.classList.remove('show');
            anotherMenuFirst.style.display = 'none';
        }
        if (anotherMenuSecond.classList.contains('show')) {
            anotherMenuSecond.classList.remove('show');
            anotherMenuSecond.style.display = 'none';
        }
        menu.style.top = '-450px';
        menu.style.opacity = '0';
        firstButton.style.display = 'block';
        menuToggleFirst.style.display = 'block';
        thirdButton.style.display = 'none';
        menuToggleSecond.style.display = 'none';
    }
});