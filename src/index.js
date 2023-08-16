import Project from './createProject';
import { createSidebar } from './sideBarDOMHandler';
import { createProjectDiv, createProjectsPanel } from './projectDOMHandler';
import { generateUniqueKey } from './localStorageHandler';
import { populateProjects } from './domUtilities';

const sideBar = createSidebar();
const projectsPanel = createProjectsPanel();
const project = new Project('Default Project');
project.key = 'project_default';
const projectDiv = createProjectDiv(project);
document.body.appendChild(sideBar);
document.body.appendChild(projectsPanel);

document.addEventListener('DOMContentLoaded', function () {
  populateProjects(projectsPanel);

  // console.log('DOM is fully loaded');
});
