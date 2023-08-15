import { createNewTaskForm, createToggleFormButton } from './formDOMHandler';
import { storeObject } from './localStorageHandler';
import { appendToElement } from './domUtilities';

export function createProjectsPanel() {
  const div = document.createElement('div');
  div.classList.add('projects-panel');
  return div;
}

export function createProjectDiv(project) {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const form = createNewTaskForm();
  const toggleFormBtn = createToggleFormButton(form);
  const deleteProjectBtn = createRemoveProjectBtn();

  title.textContent = project.projectName;
  div.classList.add('project');
  div.setAttribute('data-key', project.key);
  deleteProjectBtn.id = 'delete-project-btn';
  storeObject(project);
  const divChildren = [title, form, toggleFormBtn, deleteProjectBtn];
  appendToElement(div, divChildren);
  return div;
}

function createRemoveProjectBtn() {
  const button = document.createElement('button');
  button.textContent = 'Remove Project';
  button.id = 'delete-project-btn';

  button.addEventListener('click', function () {
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
  return button;
}
