const overlayContent = document.getElementById('overlay-content');
const closeBtn = document.getElementById('btn-close');

const firstItem = document.getElementById('first-sld-item-new');
const secondItem = document.getElementById('second-sld-item-new');
const thirdItem = document.getElementById('third-sld-item-new');

closeBtn.addEventListener('click', () => {
    overlayContent.style.display = 'none';
    firstItem.classList.remove = 'slider__item_active';
    secondItem.classList.remove = 'slider__item_active';
    thirdItem.classList.remove = 'slider__item_active';
});