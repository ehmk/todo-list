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
  form.classList.add('new-task-form');
  const submit = createSubmitButton();
  appendStringInputElement(
    'title',
    'Title: ',
    'Enter a title',
    'form-item',
    form
  );
  appendStringInputElement(
    'description',
    'Description: ',
    'Enter a description',
    'form-item',
    form
  );
  form.appendChild(createDateInput());
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
  submit.textContent = 'Submit';
  return submit;
}

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function createDateInput() {
  const div = document.createElement('div');
  appendToElement(div, createMonthSelect());
  appendToElement(div, createDaySelect());
  appendToElement(div, createYearSelect());
  return div;
}

function populateMonths(monthSelect) {
  for (let month = 0; month < months.length; month++) {
    const option = document.createElement('option');
    option.value = month + 1;
    option.textContent = months[month];
    monthSelect.appendChild(option);
  }
}

function populateDays(daySelect) {
  for (let day = 1; day <= 31; day++) {
    const option = document.createElement('option');
    option.value = day;
    option.textContent = day;
    daySelect.appendChild(option);
  }
}

function populateYears(yearSelect) {
  const currentYear = new Date().getFullYear();
  for (let year = currentYear; year <= currentYear + 50; year++) {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
  }
}

function createMonthSelect() {
  const monthLabel = document.createElement('label');
  const monthSelect = document.createElement('select');
  monthLabel.textContent = 'Month: ';
  populateMonths(monthSelect);

  return [monthLabel, monthSelect];
}

function createDaySelect() {
  const dayLabel = document.createElement('label');
  const daySelect = document.createElement('select');
  dayLabel.textContent = 'Day: ';
  populateDays(daySelect);

  return [dayLabel, daySelect];
}

function createYearSelect() {
  const yearLabel = document.createElement('label');
  const yearSelect = document.createElement('select');
  yearLabel.textContent = 'Year: ';
  populateYears(yearSelect);

  return [yearLabel, yearSelect];
}
