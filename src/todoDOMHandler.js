import { appendToElement } from './domUtilities';
import { removeFromArray, storeObject } from './localStorageHandler';

export function createTodoDiv(todoItem) {
  const div = document.createElement('div');
  const title = document.createElement('h4');
  const description = document.createElement('p');
  const dueDate = document.createElement('p');
  const priority = document.createElement('p');

  title.textContent = todoItem.title;
  description.textContent = `Description: ${todoItem.description}`;
  dueDate.textContent = `Due Date: ${todoItem.dueDate}`;
  priority.textContent = `Priority: ${todoItem.priority}`;

  div.classList.add('todo-item');
  description.classList.add('display-hidden');
  priority.classList.add('display-hidden');
  div.setAttribute('data-key', todoItem.key);

  const taskDetails = [description, priority];
  const expandBtn = createExpandBtn(taskDetails);
  const removeTaskBtn = createRemoveTaskBtn();

  const divChildren = [
    title,
    removeTaskBtn,
    dueDate,
    description,
    priority,
    expandBtn,
  ];
  appendToElement(div, divChildren);
  return div;
}

function createExpandBtn(details) {
  const btn = document.createElement('button');
  btn.textContent = `Show Details`;
  btn.classList.add('expand-btn');
  function toggleDetails() {
    for (let i = 0; i < details.length; i++) {
      if (details[i].classList.contains('display-hidden')) {
        btn.textContent = 'Hide Details';
        details[i].classList.remove('display-hidden');
        details[i].classList.add('display-block');
      } else if (details[i].classList.contains('display-block')) {
        btn.textContent = 'Show Details';
        details[i].classList.remove('display-block');
        details[i].classList.add('display-hidden');
      }
    }
  }
  btn.addEventListener('click', toggleDetails);
  return btn;
}

function createRemoveTaskBtn() {
  const btn = document.createElement('button');
  btn.textContent = 'X';
  btn.id = 'delete-task-btn';

  btn.addEventListener('click', function () {
    const parentDiv = this.parentElement;
    const key = this.parentNode.getAttribute('data-key');
    const grandparentDiv = parentDiv.parentNode;
    const grandparentKey = grandparentDiv.getAttribute('data-key');
    const json = localStorage.getItem(grandparentKey);
    const object = JSON.parse(json);
    localStorage.removeItem(grandparentKey);
    removeFromArray(object.tasks, key);
    storeObject(object);
    if (parentDiv) {
      parentDiv.parentNode.removeChild(parentDiv);
      if (localStorage.getItem(key) !== null) {
        localStorage.removeItem(key);
      } else {
        return;
      }
    }
  });
  return btn;
}
