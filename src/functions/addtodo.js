import todo-input from './../app.js';
import { addTodo } from './app.js';

// add the todo to local storage
function addTodo() {
  // get the todo input
  var todoInput = document.getElementById('todo-input');
  // get the todo input value
  var todo = todoInput.value;
  // check if the todo is not empty
  if (todo) {
    // add the todo to local storage
    localStorage.setItem(todo, todo);
    // clear the todo input
    todoInput.value = '';
    // reload the page
    location.reload();
  }

  export default addTodo;
}