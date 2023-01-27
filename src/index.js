import "./style.scss";
import { addTaskProcess } from "./createTodo";

// ADDS EVENT LISTENERS

function addEventListenersToButtons() {
    const addTaskBtn = document.getElementById("addtaskbtn");
    addTaskBtn.addEventListener("click", addTaskProcess);

    document.getElementById('tasknameinput').onkeyup = function(e) {
        if (e.keyCode == 13) {
          document.getElementById('addtaskbtn').click();
        }
      }
}

addEventListenersToButtons();