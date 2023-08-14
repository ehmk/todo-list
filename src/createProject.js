import TodoItem from './createTodoItem';
import { generateUniqueKey } from './localStorageHandler';

export default class Project {
  constructor(projectName) {
    this.projectName = projectName;
    this.key = generateUniqueKey('project');
  }
}
