import "./style.scss";

// THE TODO LIST
let todoList = [];

// THE TODO CLASS
class Todo {
    constructor(task) {
        this.task = task;
    }
}

// CREATE TODO ON BUTTON PRESS

const addTaskBtn = document.getElementById("addtaskbtn");
addTaskBtn.addEventListener("click", addTaskProcess);

function createTodo() {
    const taskName = document.getElementById("tasknameinput").value;

    const newTodo = new Todo(taskName);
    todoList.push(newTodo);

}

function updateTodoList() {

    let todoListLength = todoList.length;

    for (let i = 0; i < todoListLength; i++) {

        let taskName = todoList[i].task;

        const todosGoHere = document.getElementById("todosgohere");
        const taskDiv = document.createElement("div");
        taskDiv.setAttribute("class", "todo");
        todosGoHere.appendChild(taskDiv);
    
        const firsthalf = document.createElement("div");
        firsthalf.setAttribute("class", "firsthalf");
        taskDiv.appendChild(firsthalf);
    
        const todoBtn = document.createElement("div");
        todoBtn.setAttribute("class", "todobutton");
        firsthalf.appendChild(todoBtn);
    
        const taskText = document.createElement("p");
        taskText.textContent = taskName;
        firsthalf.appendChild(taskText);

    }
    
}

function addTaskProcess() {
    clearTodoDisplay();
    createTodo();
    updateTodoList();
    clearTextInput("tasknameinput");
}

// CLEAR THE TEXT INPUT
function clearTextInput(input) {
    document.getElementById(input).value = "";
}

// CLEAR THE TODO DISPLAY

function clearTodoDisplay() {
    const todosGoHere = document.getElementById("todosgohere");

    while (todosGoHere.childNodes.length > 0) {

        todosGoHere.removeChild(todosGoHere.lastChild);
    }
    
}
