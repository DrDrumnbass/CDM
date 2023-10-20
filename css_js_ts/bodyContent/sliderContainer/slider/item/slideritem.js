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
    firstItemNew.classList.add = 'slideritem_active';
}

firstItem.addEventListener('click', handleFirst);

secondItem.addEventListener('click', () => {
    console.log('TRUE');
    overlayContent.style.display = 'block';
    if (!secondItemNew.classList.contains('slideritem_active')) {
        secondItemNew.classList.add = 'slideritem_active';
    }
})

thirdItem.addEventListener('click', () => {
    console.log('TRUE');
    overlayContent.style.display = 'block';
    if (!thirdItemNew.classList.contains('slideritem_active')) {
        thirdItemNew.classList.add = 'slideritem_active';
    }
})