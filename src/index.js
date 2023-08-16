import Project from './createProject';
import { createSidebar } from './sideBarDOMHandler';
import { createProjectDiv, createProjectsPanel } from './projectDOMHandler';
import { generateUniqueKey } from './localStorageHandler';
import {
  populateProjects,
  loadDefaultProject,
  checkForDefaultProject,
} from './domUtilities';

const sideBar = createSidebar();
const projectsPanel = createProjectsPanel();
document.body.appendChild(sideBar);
document.body.appendChild(projectsPanel);

document.addEventListener('DOMContentLoaded', function () {
  if (checkForDefaultProject(projectsPanel)) {
    return;
  } else {
    loadDefaultProject(projectsPanel);
    populateProjects(projectsPanel);
  }
});
