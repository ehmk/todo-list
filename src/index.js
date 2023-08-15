import Project from './createProject';
import { createSidebar } from './sideBarDOMHandler';
import { createProjectDiv, createProjectsPanel } from './projectDOMHandler';
import { generateUniqueKey } from './localStorageHandler';

const project = new Project('Default Project');
console.log(project);

const projectsPanel = createProjectsPanel();
const sideBar = createSidebar();
const projectDiv = createProjectDiv(project);

document.body.appendChild(sideBar);
projectsPanel.appendChild(projectDiv);
document.body.appendChild(projectsPanel);

const todo2 = localStorage.getItem('todo');
const parsedTodo = JSON.parse(todo2);
