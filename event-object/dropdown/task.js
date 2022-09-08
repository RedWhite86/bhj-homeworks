const menuButton = document.querySelector('.dropdown__value');
const menuList = document.querySelector('.dropdown__list');
const itemsArr = Array.from(document.getElementsByClassName('dropdown__item'));

menuButton.addEventListener('click', clickMenu);
itemsArr.forEach((item, index) => item.onclick = () => setItem(index));

function clickMenu() {
  menuList.classList.toggle('dropdown__list_active');
}

function setItem(index) {
  menuButton.textContent = itemsArr[index].textContent;
  menuList.classList.remove('dropdown__list_active');
  return false;
}