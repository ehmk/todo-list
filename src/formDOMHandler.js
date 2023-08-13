import createDateInput from './dueDateDOMHandler';
import { appendToElement, createTodoDiv } from './domHandler';
import TodoItem from './createTodoItem';
import { compareAsc, format } from 'date-fns';
import { storeTaskObject } from './localStorageHandler';

export function createNewTaskForm() {
  const form = document.createElement('form');
  form.classList.add('new-task-form');
  form.classList.add('display-hidden');
  appendStringInputElement(
    'title',
    'Title: ',
    'Enter a title',
    'form-item',
    form
  );
  const dueDate = createDateInput();
  form.appendChild(dueDate);
  appendStringInputElement(
    'description',
    'Description: ',
    'Enter a description',
    'form-item',
    form
  );
  appendToElement(form, createPrioritySelect());
  form.appendChild(createSubmitButton());

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    // Create new Todo Object here, translate it to HTML, and append it to the project
    const todoItem = new TodoItem(
      formData.get('title'),
      formData.get('description'),
      format(
        new Date(
          formData.get('year'),
          formData.get('month') - 1,
          formData.get('day')
        ),
        'MM-dd-yyyy'
      ),
      formData.get('priority')
    );
    if (!formData.get('title') || !formData.get('description')) {
      alert('Please fill in all fields and try again.');
      return;
    }
    // store locally?
    storeTaskObject(todoItem);
    const todoDiv = createTodoDiv(todoItem);
    form.parentNode.appendChild(todoDiv);
  });

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

function appendStringInputElement(
  name,
  labelTextContent,
  placeholder,
  inputClass,
  parentElement
) {
  parentElement.appendChild(
    createStringInputElement(name, labelTextContent, placeholder, inputClass)[0]
  );
  parentElement.appendChild(
    createStringInputElement(name, labelTextContent, placeholder, inputClass)[1]
  );
}

function createSubmitButton() {
  const submit = document.createElement('button');
  submit.setAttribute('type', 'submit');
  submit.setAttribute('id', 'form-submit');
  submit.textContent = 'Submit';

  return submit;
}

export function createToggleFormButton(form) {
  const button = document.createElement('button');
  button.id = 'form-toggle';
  button.textContent = 'Add New Task';
  function toggleForm() {
    if (form.classList.contains('display-hidden')) {
      form.classList.remove('display-hidden');
      form.classList.add('display-flex');
      button.textContent = 'Hide Form';
    } else if (form.classList.contains('display-flex')) {
      form.classList.remove('display-flex');
      form.classList.add('display-hidden');
      button.textContent = 'Add New Task';
    }
  }

  button.addEventListener('click', toggleForm);
  return button;
}

function populatePriorities(prioritySelect) {
  const priorities = ['Low', 'Medium', 'High'];

  for (const priority of priorities) {
    const option = document.createElement('option');
    option.value = priority;
    option.textContent = priority;
    prioritySelect.appendChild(option);
  }
}

function createPrioritySelect() {
  const label = document.createElement('label');
  const prioritySelect = document.createElement('select');
  label.textContent = 'Priority: ';
  prioritySelect.setAttribute('name', 'priority');
  populatePriorities(prioritySelect);

  return [label, prioritySelect];
}
