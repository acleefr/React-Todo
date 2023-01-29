import './App.css';

function App() {
  return (
    <><h1>React Todo</h1>
    <div className='todos'>
      <div className='todo'>
        <button>Done</button>
        <p>Make Todo App in react</p>
      </div>
      <div className='todo'>
      <input id="todo-name" type='text' placeholder='Add a new todo' />
      <input id="date-picker" type="date" />
      <button onClick="addTodo()"> Add </button>
      </div>
    </div>
    </>
  );
}

export default App;
