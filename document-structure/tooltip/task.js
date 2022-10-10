const linksArr = document.querySelectorAll('.has-tooltip');

linksArr.forEach((link) => {
  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  tooltip.textContent = link.title;
  link.insertAdjacentElement('afterEnd', tooltip);
  let position;

  link.addEventListener('click', (e) => {
    const tooltipActive = document.querySelector('.tooltip_active');
    if (tooltipActive) {
      if (tooltipActive.textContent === link.title) {
        tooltipActive.classList.remove('tooltip_active')
      } else {
        tooltipActive.classList.remove('tooltip_active');
        tooltip.classList.add('tooltip_active');
      }
    } else {
      tooltip.classList.add('tooltip_active');
    }

    position = link.getBoundingClientRect();
    tooltip.setAttribute('style', `left: ${position.left}px; top: ${position.top + 20}px;`);

    e.preventDefault();
  });

  window.addEventListener('scroll', (e) => {
    position = link.getBoundingClientRect();
    tooltip.setAttribute('style', `left: ${position.left}px; top: ${position.top + 20}px;`);
  })
});