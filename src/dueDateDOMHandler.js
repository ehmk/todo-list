import { appendToElement } from './domUtilities';

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

export default function createDateInput() {
  const div = document.createElement('div');
  const title = document.createElement('h4');
  title.textContent = 'Due Date';
  div.classList.add('form-due-date');
  div.appendChild(title);
  const monthSelect = createMonthSelect();
  const daySelect = createDaySelect();
  const yearSelect = createYearSelect();

  appendToElement(div, monthSelect);
  appendToElement(div, daySelect);
  appendToElement(div, yearSelect);
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
  monthSelect.id = 'month-select';
  monthSelect.setAttribute('name', 'month');
  monthLabel.textContent = 'Month: ';
  populateMonths(monthSelect);

  return [monthLabel, monthSelect];
}

function createDaySelect() {
  const dayLabel = document.createElement('label');
  const daySelect = document.createElement('select');
  daySelect.id = 'day-select';
  daySelect.setAttribute('name', 'day');
  dayLabel.textContent = 'Day: ';
  populateDays(daySelect);

  return [dayLabel, daySelect];
}

function createYearSelect() {
  const yearLabel = document.createElement('label');
  const yearSelect = document.createElement('select');
  yearLabel.textContent = 'Year: ';
  yearSelect.id = 'year-select';
  yearSelect.setAttribute('name', 'year');
  populateYears(yearSelect);

  return [yearLabel, yearSelect];
}
