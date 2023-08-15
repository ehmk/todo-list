import TodoItem from './createTodoItem';
import { storeObject, generateUniqueKey } from './localStorageHandler';

export default class Project {
  constructor(projectName) {
    this.projectName = projectName;
    this.key = generateUniqueKey('project');
  }
}
