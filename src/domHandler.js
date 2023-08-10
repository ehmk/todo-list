import TodoItem from './createTodoItem';
import './styles/index.css';

export function createTodoDiv(todoItem) {
  const div = document.createElement('div');
  const title = document.createElement('h4');
  const description = document.createElement('p');
  const dueDate = document.createElement('p');
  const priority = document.createElement('p');

  title.textContent = todoItem.title;
  description.textContent = `Description: ${todoItem.description}`;
  dueDate.textContent = `Due Date: ${todoItem.dueDate}`;
  priority.textContent = `Priority: ${todoItem.priority}`;

  const properties = [title, description, dueDate, priority];
  div.classList.add('todo-item');
  appendToElement(div, properties);

  return div;
}

function appendToElement(parent, children) {
  for (let i = 0; i < children.length; i++) {
    parent.appendChild(children[i]);
  }
}

export function createProjectDiv(project) {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const tasks = document.createElement('h3');

  title.textContent = project.projectName;
  tasks.textContent = 'Tasks';

  const properties = [title, tasks];
  div.classList.add('project');
  appendToElement(div, properties);
  return div;
}
