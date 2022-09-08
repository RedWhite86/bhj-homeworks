const main = document.getElementById('modal_main');
const success = document.getElementById('modal_success');
main.classList.add('modal_active');

const closeButtonsArr = Array.from(document.getElementsByClassName('modal__close'));

closeButtonsArr.forEach(btn => btn.onclick = function() {
  let parent = btn.closest('.modal');
  if (parent.classList.contains('modal_active')) {
    parent.classList.remove('modal_active');
  }
});

const showSuccess = document.querySelector('.show-success');
showSuccess.onclick = function() {
  main.classList.remove('modal_active');
  success.classList.add('modal_active');
};
