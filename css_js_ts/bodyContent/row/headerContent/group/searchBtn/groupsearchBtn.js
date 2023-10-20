/*
* объявление переменных, содержащих html элементы
*/
const groupMenu = document.getElementById('group-menu'); // меню в шапке
const groupSearch = document.getElementById('group-search'); // блок с 2 кнопками
const searchBtn = document.getElementById('search-toggle'); // кнопка поиска
const searchInput = document.getElementById('search-input'); // строка поиска
const searchBtnContainer = document.getElementById('search-btn-container'); // блок с кнопками поиска
const activateSearch = document.getElementById('activate-search'); // кнопка поиска
const screenWidth = window.innerWidth; // переменная ширины экрана

// обработчик нажатия на кнопку
searchBtn.addEventListener('click', () => {
    // проверка на ширину экрана
    if (screenWidth >= 1440) {
        groupMenu.style.display = 'none';
        searchInput.style.display = 'inline-block';
        groupSearch.style.width = '100%';
        groupSearch.style.paddingLeft = '20px';
        searchBtnContainer.style.display = 'none';
        activateSearch.style.visibility = 'visible';
    } else {
        groupMenu.style.display = 'none';
        searchInput.style.display = 'inline-block';
        groupSearch.style.width = '100%';
        groupSearch.style.paddingLeft = '20px';
        searchBtnContainer.style.display = 'none';
        activateSearch.style.visibility = 'visible';
    }
});

// обработчик нажатия на любой элемент страницы
document.addEventListener('click', (e) => {
    // проверка на ширину экрана
    if (screenWidth >= 1440) {
        // проверка нажатия на строку поиска и кнопку поиска 
        if (!e.target.closest('#search-input') && !e.target.closest('#activate-search') && !e.target.closest('#search-toggle')) {
            searchInput.style.display = 'none';
            activateSearch.style.visibility = 'hidden';
            searchBtnContainer.style.display = 'flex';
            groupMenu.style.display = 'flex';
            groupSearch.style.paddingLeft = '0';
            groupSearch.style.width = 'auto';
            searchInput.value = '';
        } 
    } else {
        if (!e.target.closest('#search-input') && !e.target.closest('#activate-search') && !e.target.closest('#search-toggle')) {
            searchInput.style.display = 'none';
            activateSearch.style.visibility = 'hidden';
            searchBtnContainer.style.display = 'flex';
            groupSearch.style.paddingLeft = '0';
            groupSearch.style.width = 'auto';
            searchInput.value = ''; 
        }
    }
})