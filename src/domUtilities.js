import TodoItem from './createTodoItem';
import {
  createNewProjectForm,
  createNewTaskForm,
  createToggleFormButton,
} from './formDOMHandler';
import { storeObject } from './localStorageHandler';
import './styles/index.css';

export function appendToElement(parent, children) {
  for (let i = 0; i < children.length; i++) {
    parent.appendChild(children[i]);
  }
}
