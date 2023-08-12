import TodoItem from './createTodoItem';
import Project from './createProject';
import { createTodoDiv, createProjectDiv } from './domHandler';
import { compareAsc, format } from 'date-fns';

const project = new Project('Example Project');
const todo = new TodoItem(
  'Example Task Title',
  'Work on my new project',
  format(new Date(2023, 11, 2), 'MM-dd-yyyy'),
  'High'
);

const anotherTodo = new TodoItem(
  'Example Task Title',
  'Work on my new project',
  format(new Date(2023, 6, 2), 'MM-dd-yyyy'),
  'High'
);

const projectDiv = createProjectDiv(project);
const todoItem = createTodoDiv(todo);
const anotherTodoItem = createTodoDiv(anotherTodo);

projectDiv.appendChild(todoItem);
projectDiv.appendChild(anotherTodoItem);
document.body.appendChild(projectDiv);
