const rightArrow = document.querySelector('.slider__arrow_next');
const leftArrow = document.querySelector('.slider__arrow_prev');
const itemsArr = Array.from(document.getElementsByClassName('slider__item'));

let activeItemIndex = itemsArr.findIndex((link) => link.className = 'slider__item slider__item_active');

rightArrow.onclick = showNextItem;
leftArrow.onclick = showPreviousItem;

function showNextItem() {
  itemsArr[activeItemIndex].className = 'slider__item';
  if (activeItemIndex === itemsArr.length - 1) {
    activeItemIndex = 0;
    itemsArr[activeItemIndex].className = 'slider__item slider__item_active';
  } else {
    activeItemIndex++;
    itemsArr[activeItemIndex].className = 'slider__item slider__item_active';
  }
}

function showPreviousItem() {
  itemsArr[activeItemIndex].className = 'slider__item';
  if (activeItemIndex === 0) {
    activeItemIndex = itemsArr.length - 1;
    itemsArr[activeItemIndex].className = 'slider__item slider__item_active';
  } else {
    activeItemIndex--;
    itemsArr[activeItemIndex].className = 'slider__item slider__item_active';
  }
}