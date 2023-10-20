const firstItem = document.getElementById('toggle');
const secondItem = document.getElementById('sld-item-second');
const thirdItem = document.getElementById('sld-item-third');

const overlayContent = document.getElementById('overlay-content');

const firstItemNew = document.getElementById('first-sld-item-new');
const secondItemNew = document.getElementById('second-sld-item-new');
const thirdItemNew = document.getElementById('third-sld-item-new');

function handleFirst() {
    console.log('TRUE');
    overlayContent.style.display = 'block';
    firstItemNew.classList.add = 'slider__item_active';
}

firstItem.addEventListener('click', handleFirst);

secondItem.addEventListener('click', () => {
    console.log('TRUE');
    overlayContent.style.display = 'block';
    if (!secondItemNew.classList.contains('slider__item_active')) {
        secondItemNew.classList.add = 'slider__item_active';
    }
})

thirdItem.addEventListener('click', () => {
    console.log('TRUE');
    overlayContent.style.display = 'block';
    if (!thirdItemNew.classList.contains('slider__item_active')) {
        thirdItemNew.classList.add = 'slider__item_active';
    }
})