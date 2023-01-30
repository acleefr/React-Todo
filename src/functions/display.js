import addTodo from './addtodo.js';

// display the todos
function displayTodos() {
  // get the todos from local storage
  var todos = Object.keys(localStorage);
  // get the todo list
  var todoList = document.getElementById('todo-list');
  // loop through the todos
  for (var i = 0; i < todos.length; i++) {
    // create a todo item
    var todoItem = document.createElement('li');
    // create a todo item text
    var todoItemText = document.createTextNode(todos[i]);
    // create a todo item checkbox
    var todoItemCheckbox = document.createElement('input');
    // set the todo item checkbox type
    todoItemCheckbox.type = 'checkbox';
    // set the todo item checkbox id
    todoItemCheckbox.id = todos[i];
    // set the todo item checkbox onclick
    todoItemCheckbox.onclick = function() {
      // remove the todo from local storage
      localStorage.removeItem(this.id);
      // reload the page
      location.reload();
    };
    // append the todo item checkbox to the todo item
    todoItem.appendChild(todoItemCheckbox);
    // append the todo item text to the todo item
    todoItem.appendChild(todoItemText);
    // append the todo item to the todo list
    todoList.appendChild(todoItem);
  }

  export default displayTodos;
}