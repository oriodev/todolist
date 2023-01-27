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

export { clearTextInput, clearTodoDisplay }