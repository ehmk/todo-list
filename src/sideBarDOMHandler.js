import { createNewProjectForm } from './formDOMHandler';

export function createSidebar() {
  const div = document.createElement('div');
  div.classList.add('side-bar');
  const form = createNewProjectForm();
  form.classList.add('display-hidden');
  div.appendChild(createNewProjectBtn(form));
  div.appendChild(form);
  return div;
}

function createNewProjectBtn(form) {
  const button = document.createElement('button');
  button.textContent = 'Create New Project';

  button.addEventListener('click', function () {
    if (form.classList.contains('display-hidden')) {
      form.classList.remove('display-hidden');
      button.textContent = 'Hide Form';
    } else if (!form.classList.contains('display-hidden')) {
      form.classList.add('display-hidden');
      button.textContent = 'Create New Project';
    }
  });
  return button;
}
