// The purpose of a project instance is to aggregate all the todo items that are part of a singular purpose (the project)
// The todo items are just the individual actions one has to take to fulfill the needs of a project

import TodoItem from './createTodoItem';

export default class Project {
  constructor(projectName) {
    this.projectName = projectName;
  }
}
