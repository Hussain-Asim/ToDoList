import "./styles.css";

const dialog = document.getElementById("dialog");
import { inputTitle, textAreaDescription, dueDateInput, notesTextArea } from "./dialogElements.js";

const addTaskBtn = document.querySelector(".addTaskBtn");
const closeButton = document.getElementById("closeBtn");

addTaskBtn.addEventListener("click", () => {
    dialog.showModal();
})

closeButton.addEventListener("click", () => {
    dialog.close();
});


//DOM LOGIC

const divContainer = document.querySelector(".container");

const mainUI = document.querySelector(".mainUI");
mainUI.textContent = "WholeMainUI";

import { displayTodoDOM } from "./displayTodo.js";

const dialogAddBtn = document.querySelector(".dialogAddBtn")
dialogAddBtn.addEventListener("click", () => {

    displayTodoDOM(mainUI)

    inputTitle.value = '';
    dueDateInput.value = '';
    dialog.close();

})



















//When click `Completed Todos`, current page 

//When I click radioUI, the item should be added in `Completed Todos`.
//todoDiv should be delete in current page 


//first set modules and then one by one 
//When click 'completed Todos', then new page should be opened.