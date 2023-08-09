// One todo item is a single step on a project. Multiple todo items that fulfill a singular goal is called a project in this case

export default class TodoItem {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  logTodo = () => {
    console.log(
      `Title: ${this.title}\nDescription: ${this.description}\nDue Date: ${this.dueDate}\nPriority: ${this.priority}`
    );
  };
}
