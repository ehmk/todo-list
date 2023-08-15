import { generateUniqueKey } from './localStorageHandler';

export default class TodoItem {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.key = generateUniqueKey(`task`);
  }

  parentProjectId;

  setParentProjectId(id) {
    parentProjectId = id;
    console.log('set');
  }
}
