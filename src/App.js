import { getByTitle } from '@testing-library/react';
import './App.css'; 


function App() {
  resetTo();
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
  title();
  generic();
  let div = document.createElement("div");
  div.innerHTML = "Hello World";
  //giv this to the div classname = "title"
  div.setAttribute("class", "title");
  document.body.appendChild(div);
}

function title(){
    let div = document.createElement("h1");
    div.innerHTML = "Ma Todo List :";
    document.body.appendChild(div);
}

function generic(){
   let div = document.createElement("div");

  //add a input
  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", "input");
  input.setAttribute("placeholder", "Add a new task");
  div.appendChild(input);

  //add a button
  let button = document.createElement("button");
  button.setAttribute("id", "button");
  button.innerHTML = "Add";
  div.appendChild(button);
  document.body.appendChild(div);
}

export default App;