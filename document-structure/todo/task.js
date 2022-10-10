const form = document.getElementById('tasks__form');
const input = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

form.addEventListener('submit', (e) => {
  tasksList.innerHTML += `<div class="task">
    <div class="task__title">` + input.value + `</div>
    <a href="#" class="task__remove">&times;</a>
  </div>`;

  form.reset();
  e.preventDefault();
});

tasksList.addEventListener('click', (e) => {
  if (e.target.classList.contains('task__remove')) {
    event.target.closest('.task').remove();
  }
});