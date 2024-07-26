/* exported todos
writeTodos
*/
interface Todo {
  todoId: string;
  task: string;
  isCompleted: boolean;
}

let todos: Todo[] = readTodos();

function writeTodos(): void {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}

function readTodos(): Todo[] {
  const storedTodos = localStorage.getItem('todos-storage');
  if (!storedTodos) return [];
  const todosStorage = JSON.parse(storedTodos);
  return todosStorage;
}
