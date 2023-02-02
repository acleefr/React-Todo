import './App.css';

function App() {
  render();
  add();
  return (
    <div>
    </div>
  );
}

function resetTo(){
  document.body.innerHTML = "";
} 

function render(){
  resetTo();
  title();
  generic();
  displayTodo();
}

function title(){
    let div = document.createElement("h1");
    div.innerHTML = "Ma Todo List :";
    document.body.appendChild(div);
}

function generic(){
   let div = document.createElement("div");

  //add a input that will take the task
  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", "task");
  input.setAttribute("placeholder", "Add a new task");
  div.appendChild(input);

  //add a button that trigger the add function
  let button = document.createElement("button");
  button.setAttribute("id", "button");
  button.setAttribute("onclick", "add()");
  button.innerHTML = "+";
  div.appendChild(button);
  document.body.appendChild(div);
}

function displayTodo(){
  //add the todo stocked in the local storage to the div
  let div = document.createElement("div");
  div.setAttribute("id", "todo");
  document.body.appendChild(div);
}
 
if (document.getElementById("button")) {
  console.log("button exist");
}

function add(){
  console.log("add");
  let task = document.getElementById("task").value;
  let div = document.createElement("div");
  div.innerHTML = task;
  document.getElementById("todo").appendChild(div);
} 

export default App;