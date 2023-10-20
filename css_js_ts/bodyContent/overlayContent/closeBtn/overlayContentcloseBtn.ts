const overlayContent = document.getElementById('overlay-content');
const closeBtn = document.getElementById('btn-close');

const firstItem = document.getElementById('first-sld-item-new');
const secondItem = document.getElementById('second-sld-item-new');
const thirdItem = document.getElementById('third-sld-item-new');

closeBtn.addEventListener('click', () => {
    overlayContent.style.display = 'none';
    firstItem.classList.remove = 'slideritem_active';
    secondItem.classList.remove = 'slideritem_active';
    thirdItem.classList.remove = 'slideritem_active';
});