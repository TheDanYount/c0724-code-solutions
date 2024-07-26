'use strict';
let todos = readTodos();
function writeTodos() {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}
function readTodos() {
  const storedTodos = localStorage.getItem('todos-storage');
  if (!storedTodos) return [];
  const todosStorage = JSON.parse(storedTodos);
  return todosStorage;
}
