import { inputTitle, textAreaDescription, dueDateInput, notesTextArea } from "./dialogElements.js";

class Todos {
    constructor(title, description, dueDate, priority, notes) {
        this.title = title; //title = inputTitle
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }
}

function displayRadioValue() {
    var ele = document.getElementsByName('radiooss');

    for (let i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            return ele[i].value;
    }
}

const todoInstanceClassLogic = new Todos(inputTitle, textAreaDescription, dueDateInput, displayRadioValue, notesTextArea)

export { todoInstanceClassLogic } 