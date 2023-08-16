import Project from './createProject';
import { createSidebar } from './sideBarDOMHandler';
import { createProjectDiv, createProjectsPanel } from './projectDOMHandler';
import { generateUniqueKey } from './localStorageHandler';
import { populateProjects, loadDefaultProject } from './domUtilities';

const sideBar = createSidebar();
const projectsPanel = createProjectsPanel();
document.body.appendChild(sideBar);
document.body.appendChild(projectsPanel);

document.addEventListener('DOMContentLoaded', function () {
  populateProjects(projectsPanel);
  loadDefaultProject();
});
