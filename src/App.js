import './App.css';

function App() {
  //reset console
  console.clear();
  render();
  return (
    <><input type="text" placeholder="Add a todo" /><button>Add</button><div>
    </div></>
  );
}

function render() {
  resetPage();
  displayHeader();
  displayInput();
}

function resetPage() {
  document.body.innerHTML = '';
} 

function displayHeader() {
  const header = document.createElement('h1');
  header.textContent = 'Todo App';
  document.body.appendChild(header);
}

function displayInput() {
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'Add a todo');
  input.setAttribute('id', 'todo-input');
  document.body.appendChild(input);
  // add a button
  const button = document.createElement('button');
  button.textContent = 'Add';
  document.body.appendChild(button);
  // add event listener
  button.addEventListener('click', () => {
    displayTodo();
  });
}

function displayTodo() {
  //stock input value in a variable
  const input = document.getElementById('todo-input');
  const inputValue = input.value;
  console.log(inputValue);

  const todo = document.createElement('div');
  todo.textContent = inputValue;
  document.body.appendChild(todo);

  //reset input text
  input.value = '';

  //diplay a button to delete the todo
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Done';
  todo.appendChild(deleteButton);
  deleteButton.addEventListener('click', () => {
    todo.remove();
  });
}

export default App;