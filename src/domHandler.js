import TodoItem from './createTodoItem';
import './styles/index.css';

export function createTodoDiv(todoItem) {
  const div = document.createElement('div');
  const title = document.createElement('h4');
  const description = document.createElement('p');
  const dueDate = document.createElement('p');
  const priority = document.createElement('p');
  const expandBtn = document.createElement('button');

  title.textContent = todoItem.title;
  description.textContent = `Description: ${todoItem.description}`;
  dueDate.textContent = `Due Date: ${todoItem.dueDate}`;
  priority.textContent = `Priority: ${todoItem.priority}`;
  expandBtn.textContent = `Expand`;

  div.classList.add('todo-item');
  description.classList.add('task-detail');
  priority.classList.add('task-detail');
  expandBtn.classList.add('expand-btn');

  const taskDetails = [description, priority];

  expandBtn.addEventListener('click', () => {
    showHideDetails(taskDetails);
  });

  const divChildren = [title, dueDate, description, priority, expandBtn];
  appendToElement(div, divChildren);

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

  const divChildren = [title, tasks];
  div.classList.add('project');
  appendToElement(div, divChildren);
  return div;
}

function showHideDetails(details) {
  for (let i = 0; i < details.length; i++) {
    if (window.getComputedStyle(details[i]).display === 'none') {
      details[i].style.display = 'block';
      console.log('1');
    } else {
      details[i].style.display = 'none';
      // console.log(details[i].style.display);
    }
  }
}
