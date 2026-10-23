import { todoInstanceClassLogic } from "./todoObjectClass.js";

function displayTodoDOM(mainUI) {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todoDiv");
    mainUI.appendChild(todoDiv);

    const radioUI = document.createElement('input');
    radioUI.type = "radio"
    radioUI.classList.add("radioUI");
    todoDiv.appendChild(radioUI);

    //div so that we can align
    const todoTitleDateUIdiv = document.createElement('div')
    todoTitleDateUIdiv.classList.add("todoTitleDateUIdiv")
    todoDiv.appendChild(todoTitleDateUIdiv)

    const todoTitle = document.createElement("h2");
    todoTitle.classList.add("todoTitle");
    todoTitle.textContent = todoInstanceClassLogic.title.value;
    todoTitleDateUIdiv.appendChild(todoTitle);

    const todoDate = document.createElement("h3");
    todoDate.classList.add("todoDate");
    todoDate.textContent = todoInstanceClassLogic.dueDate.value;
    todoTitleDateUIdiv.appendChild(todoDate);
}
export { displayTodoDOM }