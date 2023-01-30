import './App.css'; 


function App() {
  return (
    // Todo list
    //input to add todo
    <div className="App">
      <h1>Todo List</h1>
      <div className="todo-list">
        <ul id="todo-list"></ul>
      </div>
      <input type='text' id='todo-input' />
      <button id='add-todo' onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default App;
