import TodoItem from './createTodoItem';
import './styles/index.css';

export function createProjectDiv(project) {
  const div = document.createElement('div');
  const title = document.createElement('h2');

  title.textContent = project.projectName;
  div.classList.add('project');

  const divChildren = [title, addTaskForm()];
  appendToElement(div, divChildren);
  return div;
}

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

  div.classList.add('todo-item');
  description.classList.add('display-hidden');
  priority.classList.add('display-hidden');

  const taskDetails = [description, priority];
  const expandBtn = createExpandBtn(taskDetails);

  const divChildren = [title, dueDate, description, priority, expandBtn];
  appendToElement(div, divChildren);

  return div;
}

function appendToElement(parent, children) {
  for (let i = 0; i < children.length; i++) {
    parent.appendChild(children[i]);
  }
}

function createExpandBtn(details) {
  const btn = document.createElement('button');
  btn.textContent = `Show Details`;
  btn.classList.add('expand-btn');
  function toggleDetails() {
    for (let i = 0; i < details.length; i++) {
      if (details[i].classList.contains('display-hidden')) {
        btn.textContent = 'Hide Details';
        details[i].classList.remove('display-hidden');
        details[i].classList.add('display-block');
      } else if (details[i].classList.contains('display-block')) {
        btn.textContent = 'Show Details';
        details[i].classList.remove('display-block');
        details[i].classList.add('display-hidden');
      }
    }
  }
  btn.addEventListener('click', toggleDetails);
  return btn;
}

function addTaskForm() {
  const form = document.createElement('form');
  const submit = createSubmitButton();
  form.appendChild(
    createStringInputElement('title', 'Title', 'Enter a title', 'todo-item')[0]
  );
  form.appendChild(
    createStringInputElement('title', 'Title', 'Enter a title', 'todo-item')[1]
  );
  form.appendChild(createSubmitButton());
  return form;
}

function createStringInputElement(
  name,
  labelTextContent,
  placeholder,
  inputClass
) {
  const label = document.createElement('label');
  const input = document.createElement('input');
  label.setAttribute('for', name);
  label.textContent = labelTextContent;
  input.setAttribute('type', 'text');
  input.placeholder = placeholder;
  input.classList.add(inputClass);
  input.setAttribute('name', name);
  return [label, input];
}

function createSubmitButton() {
  const submit = document.createElement('button');
  submit.setAttribute('type', 'submit');
  submit.textContent = 'Submit';
  return submit;
}
