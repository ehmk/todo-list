import TodoItem from './createTodoItem';
import createTodoDiv from './domHandler';

const todo = new TodoItem('Study', 'Work on my new project', 'Someday', 'High');
const item = createTodoDiv(todo);
document.body.appendChild(item);
