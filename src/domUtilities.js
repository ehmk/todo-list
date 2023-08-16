import TodoItem from './createTodoItem';
import {
  createNewProjectForm,
  createNewTaskForm,
  createToggleFormButton,
} from './formDOMHandler';
import { storeObject } from './localStorageHandler';
import { createProjectDiv } from './projectDOMHandler';
import './styles/index.css';
import { createTodoDiv } from './todoDOMHandler';
import Project from './createProject';

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

    if (key === 'project_default') {
      continue;
    } else if (localStorage.getItem(key) !== null && /^project/i.test(key)) {
      parentDiv.appendChild(objectDiv);
    } else {
      continue;
    }
    populateTodos(objectDiv, object);
  }
}

function populateTodos(projectDiv, projectObject) {
  const tasks = projectObject.tasks;
  for (let i = 0; i < tasks.length; i++) {
    let key = tasks[i];
    let object = JSON.parse(localStorage.getItem(key));
    let objectDiv = createTodoDiv(object);

    projectDiv.appendChild(objectDiv);
  }
}

export function checkForDefaultProject(projectsPanel) {
  const childWithAttribute = projectsPanel.querySelector(
    'div[data-key="project_default"]'
  );

  if (childWithAttribute) {
    return true;
  } else {
    return false;
  }
}

export function loadDefaultProject(projectsPanel) {
  if (localStorage.getItem('project_default') !== null) {
    const jsonString = localStorage.getItem('project_default');
    const object = JSON.parse(jsonString);
    const objectDiv = createProjectDiv(object);
    populateTodos(objectDiv, object);
    projectsPanel.appendChild(objectDiv);
    return;
  } else {
    const project = new Project('Default Project');
    project.key = 'project_default';
    const projectDiv = createProjectDiv(project);
    populateTodos(projectDiv, project);
    projectsPanel.appendChild(projectDiv);
  }
}
