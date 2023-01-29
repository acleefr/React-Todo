

function addTodo() {
  const todoName = document.getElementById('todo-name').value;
  const todoDate = document.getElementById('date-picker').value;
  const todo = {
    name: todoName,
    date: todoDate,
    done: false,
  };
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
  window.location.reload();
}