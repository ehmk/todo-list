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

export function populateProjects(parentDiv) {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    const object = JSON.parse(value);
    const objectDiv = createProjectDiv(object);
    populateTodos(object);

    if (localStorage.getItem(key) !== null && /^project/i.test(key)) {
      parentDiv.appendChild(objectDiv);
    } else {
      continue;
    }
  }
}

function populateTodos(project) {
  console.log(project.tasks);
  // for (let i = 0; i < project.tasks.length; i++) {
  //   console.log(i);
  // }
}

function checkForDefaultProject(defaultKey) {
  if (localStorage.getItem(defaultKey) !== null) {
    return true;
  } else {
    return false;
  }
}

export function loadDefaultProject(projectsPanel) {
  if (checkForDefaultProject('project_default') === true) {
    console.log('Not loading default project...');
    return;
  } else {
    console.log('Loading default project...');
    const project = new Project('Default Project');
    project.key = 'project_default';
    const projectDiv = createProjectDiv(project);
  }
}
