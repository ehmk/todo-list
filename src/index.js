import TodoItem from './createTodoItem';
import Project from './createProject';
import { createTodoDiv, createProjectDiv } from './domHandler';

const project = new Project('My Project');
const todo = new TodoItem('Study', 'Work on my new project', 'Someday', 'High');
const projectDiv = createProjectDiv(project);
const todoItem = createTodoDiv(todo);

projectDiv.appendChild(todoItem);
document.body.appendChild(projectDiv);
