import './App.css'; 


function App() {
  render();
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
  button.innerHTML = "Add";
  div.appendChild(button);
  document.body.appendChild(div);
}

function displayTodo(){
  console.log("displayTodo");
  let div = document.createElement("div");
  div.setAttribute("id", "todo");
  document.body.appendChild(div);
}

function add(){
  console.log("add");
  return false;
}



export default App;