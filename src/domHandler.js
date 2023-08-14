import TodoItem from './createTodoItem';
import {
  createNewProjectForm,
  createNewTaskForm,
  createToggleFormButton,
} from './formDOMHandler';
import { storeObject } from './localStorageHandler';
import './styles/index.css';

export function createProjectsPanel() {
  const div = document.createElement('div');
  div.classList.add('projects-panel');
  return div;
}

export function createSidebar() {
  const div = document.createElement('div');
  div.classList.add('side-bar');
  div.appendChild(createNewProjectBtn());
  const form = createNewProjectForm();
  div.appendChild(form);
  return div;
}

function createNewProjectBtn() {
  const button = document.createElement('button');
  button.textContent = 'Create New Project';

  return button;
}

export function createProjectDiv(project) {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const form = createNewTaskForm();
  const toggleFormBtn = createToggleFormButton(form);

  title.textContent = project.projectName;
  div.classList.add('project');
  div.setAttribute('data-key', project.key);
  storeObject(project);
  const divChildren = [title, form, toggleFormBtn];
  appendToElement(div, divChildren);
  return div;
}

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
    dueDate,
    description,
    priority,
    expandBtn,
    removeTaskBtn,
  ];
  appendToElement(div, divChildren);

  return div;
}

export function appendToElement(parent, children) {
  for (let i = 0; i < children.length; i++) {
    parent.appendChild(children[i]);
  }
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
  btn.textContent = 'Delete Task';
  btn.id = 'delete-task-btn';

  btn.addEventListener('click', function () {
    const parentDiv = this.parentElement;
    const key = this.parentNode.getAttribute('data-key');
    if (parentDiv) {
      console.log('Removed ' + key);
      parentDiv.parentNode.removeChild(parentDiv);
      if (localStorage.getItem(key) !== null) {
        localStorage.removeItem(key);
        console.log(`Item with key "${key}" has been removed.`);
      } else {
        console.log(`Item with key "${key}" does not exist in localStorage.`);
      }
    }
  });
  return btn;
}
