import "./style.scss";
import { addTaskProcess } from "./createTodo";

// ADDS EVENT LISTENERS

function addEventListenersToButtons() {
    const addTaskBtn = document.getElementById("addtaskbtn");
    addTaskBtn.addEventListener("click", addTaskProcess);
}

addEventListenersToButtons();