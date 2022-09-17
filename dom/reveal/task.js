const revealArray = Array.from(document.getElementsByClassName('reveal'));
document.addEventListener('scroll', checkPosition);

function checkPosition() {
  revealArray.forEach(element => {
    const {bottom, top} = element.getBoundingClientRect();
    if (bottom < 0) {
      return element.classList.remove('reveal_active');
    }
    if (top > window.innerHeight) {
      return element.classList.remove('reveal_active');
    }
    return element.classList.add('reveal_active');
  });
};