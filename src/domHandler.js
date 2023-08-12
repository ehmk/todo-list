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
  expandBtn.textContent = `Show Details`;

  div.classList.add('todo-item');
  description.classList.add('display-hidden');
  priority.classList.add('display-hidden');
  expandBtn.classList.add('expand-btn');

  const taskDetails = [description, priority];

  expandBtn.addEventListener('click', () => {
    showHideDetails(taskDetails, expandBtn);
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

  title.textContent = project.projectName;
  div.classList.add('project');

  const divChildren = [title];
  appendToElement(div, divChildren);
  return div;
}

function showHideDetails(details, btn) {
  for (let i = 0; i < details.length; i++) {
    if (details[i].classList.contains('display-hidden')) {
      details[i].classList.remove('display-hidden');
      details[i].classList.add('display-block');
      btn.textContent = 'Hide Details';
    } else if (details[i].classList.contains('display-block')) {
      details[i].classList.remove('display-block');
      details[i].classList.add('display-hidden');
      btn.textContent = 'Show Details';
    }
  }
}
