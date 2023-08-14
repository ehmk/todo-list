import TodoItem from './createTodoItem';
import Project from './createProject';
import {
  createSidebar,
  createTodoDiv,
  createProjectDiv,
  createProjectsPanel,
} from './domHandler';
import { compareAsc, format } from 'date-fns';
import { generateUniqueKey } from './localStorageHandler';

const project = new Project('Default Project');
console.log(project);

// const todo = new TodoItem(
//   'Example Task Title',
//   'Work on my new project',
//   format(new Date(2023, 11, 2), 'MM-dd-yyyy'),
//   'High',
//   generateUniqueKey('task_')
// );

const projectsPanel = createProjectsPanel();
const sideBar = createSidebar();
const projectDiv = createProjectDiv(project);

document.body.appendChild(sideBar);
projectsPanel.appendChild(projectDiv);
document.body.appendChild(projectsPanel);

const todo2 = localStorage.getItem('todo');
const parsedTodo = JSON.parse(todo2);

// projectDiv.appendChild(createTodoDiv(parsedTodo));
