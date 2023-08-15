import TodoItem from './createTodoItem';
import {
  createNewProjectForm,
  createNewTaskForm,
  createToggleFormButton,
} from './formDOMHandler';
import { storeObject } from './localStorageHandler';
import { createProjectDiv } from './projectDOMHandler';
import './styles/index.css';

export function appendToElement(parent, children) {
  for (let i = 0; i < children.length; i++) {
    parent.appendChild(children[i]);
  }
}

export function populateProjectsPanel(parentDiv) {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    const object = JSON.parse(value);
    const objectDiv = createProjectDiv(object);

    if (localStorage.getItem(key) !== null) {
      parentDiv.appendChild(objectDiv);
    } else {
      continue;
    }

    // parentDiv.appendChild(objectDiv);

    // console.log(`Key: ${key}, Value: ${value}`);
  }
}
