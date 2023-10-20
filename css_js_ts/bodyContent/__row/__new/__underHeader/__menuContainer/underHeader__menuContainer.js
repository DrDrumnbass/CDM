/*
* объявление переменных, содержащих html элементы
*/
const firstToggleBtn = document.getElementById('another-menu-toggle-first');
const firstMenu = document.getElementById('another-menu-first');

const secondToggleBtn = document.getElementById('another-menu-toggle-second');
const secondMenu = document.getElementById('another-menu-second');

const thirdToggleBtnFirst = document.getElementById('another-menu-toggle-third-1');
const thirdToggleBtnSecond = document.getElementById('another-menu-toggle-third-2');
const thirdMenu = document.getElementById('another-menu-third');

const fourthToggleBtnFirst = document.getElementById('another-menu-toggle-fourth-1');
const fourthToggleBtnSecond = document.getElementById('another-menu-toggle-fourth-2');
const fourthMenu = document.getElementById('another-menu-fourth');

firstToggleBtn.addEventListener('mouseenter', () => {
    firstMenu.classList.add('show');
    secondMenu.classList.remove('show');
    secondMenu.style.display = 'none';
    firstMenu.style.display = 'block';
});

secondToggleBtn.addEventListener('mouseenter', () => {
    secondMenu.classList.add('show');
    firstMenu.classList.remove('show');
    firstMenu.style.display = 'none';
    secondMenu.style.display = 'block';
});

if (!thirdMenu.classList.contains('show')) {
    thirdToggleBtnSecond.style.display = 'none';
    thirdToggleBtnFirst.addEventListener('click', () => {
        thirdMenu.classList.add('show');
        thirdMenu.style.display = 'block';
        thirdMenu.style.padding = '15px 0 0 25px';
        thirdToggleBtnSecond.style.display = 'block';
        thirdToggleBtnFirst.style.display = 'none';
    });
}

thirdToggleBtnSecond.addEventListener('click', () => {
    thirdMenu.classList.remove('show');
    thirdMenu.style.display = 'none';
    thirdToggleBtnFirst.style.display = 'block';
    thirdToggleBtnSecond.style.display = 'none';
});

if (!fourthMenu.classList.contains('show')) {
    fourthToggleBtnSecond.style.display = 'none';
    fourthToggleBtnFirst.addEventListener('click', () => {
        fourthMenu.classList.add('show');
        fourthMenu.style.display = 'block';
        fourthMenu.style.padding = '15px 0 0 25px';
        fourthToggleBtnSecond.style.display = 'block';
        fourthToggleBtnFirst.style.display = 'none';
    });
}

fourthToggleBtnSecond.addEventListener('click', () => {
    fourthMenu.classList.remove('show');
    fourthMenu.style.display = 'none';
    fourthToggleBtnFirst.style.display = 'block';
    fourthToggleBtnSecond.style.display = 'none';
});