/*
* объявление переменных, содержащих html элементы
*/
const activatingSearch = document.getElementById('activate-search'); // кнопка поиска
const currentInput = document.getElementById('search-input'); // строка поиска

// обработчик нажатия на кнопку поиска
activatingSearch.addEventListener('click', () => {
    currentInput.value = 'Ищем...';
});