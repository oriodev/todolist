import "./style.scss";
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'


import Sortable from 'sortablejs';
import { addTaskProcess } from "./createTodo";

// MAKES IT SORTABLE

function sortableList() {
    let player = document.getElementById("todosgohere");
    new Sortable(player);
}


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
sortableList();