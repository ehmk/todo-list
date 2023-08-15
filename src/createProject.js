import TodoItem from './createTodoItem';
import {
  storeObject,
  removeObjectFromStorage,
  generateUniqueKey,
} from './localStorageHandler';

export default class Project {
  constructor(projectName) {
    this.projectName = projectName;
    this.key = generateUniqueKey('project');
  }

  tasks = [];
  addTask = function (task) {
    tasks.push(task.key);
    console.log(tasks);
    removeObjectFromStorage(this.key);
  };
}
