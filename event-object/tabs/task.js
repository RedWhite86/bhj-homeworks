let tabsArr = Array.from(document.getElementsByClassName('tab'));
let tabsContArr = Array.from(document.getElementsByClassName('tab__content'));

tabsArr.forEach((tab) => tab.addEventListener('click', activateTab));

function activateTab(e) {
  deleteActive();
  let index = tabsArr.findIndex((item) => item === e.target);
  e.target.classList.toggle('tab_active');
  tabsContArr[index].classList.toggle('tab__content_active');
}

function deleteActive() {
  tabsArr.forEach((tab) => tab.classList.contains('tab_active') ?
    tab.classList.remove('tab_active') : false);

  tabsContArr.forEach((text) => text.classList.contains('tab__content_active') ?
    text.classList.remove('tab__content_active') : false);
}