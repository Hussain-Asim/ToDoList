


//when user open app, all todos in default project. User able to create new projects and choose which todo should go into x project.
import "./styles.css";

//create todos objects by classes
//when click btn, a popup window should show, in which title and other properties should shown empty

//properties todo-items would have.
//title(both), description, dueDate, priority(both), checklist, setting toDo-complete

//title = divbox in which title and below is description


//what todo should have at homepage?
//radio, title, duedate
//edit todo, delete todo

//application logic
//create todo, setting todo complete notcomplete, changing priority etc. mean all things seperate from dom.



// console.log(todo1.title);
// console.log(todo1);

// const aa = document.createElement('p')
// aa.textContent = ;
// document.body.appendChild(aa)



const dialog = document.getElementById("dialog");
const addTaskBtn = document.querySelector(".addTaskBtn");
const closeButton = document.getElementById("closeBtn");

// Close button closes the dialog box

addTaskBtn.addEventListener("click", () => {
    // console.log('demo');
    dialog.showModal();
})

closeButton.addEventListener("click", () => {
    dialog.close();
});


// const userInputDiv = document.createElement("div")
// userInputDiv.classList.add("userInputDiv");
// dialog.appendChild(userInputDiv);

const inputTitle = document.createElement("input");
inputTitle.type = "text";
inputTitle.placeholder = "Title";
inputTitle.classList.add("inputTitle")
dialog.appendChild(inputTitle);

// const inputDescription = document.createElement("input")
// inputDescription.type = "text";
// inputDescription.placeholder = "Description";
// inputDescription.classList.add("inputDescription")
// userInputDiv.appendChild(inputDescription);

const textAreaDescription = document.createElement("textarea");
textAreaDescription.placeholder = "Description";
textAreaDescription.classList.add("textAreaDescription")
dialog.appendChild(textAreaDescription);

const dueDateDiv = document.createElement("div");
dueDateDiv.classList.add("dueDateDiv")
dialog.appendChild(dueDateDiv);
const dueDateLabel = document.createElement("label")
dueDateLabel.classList.add("dueDateLabel")
dueDateLabel.textContent = "Due Date: ";
dueDateDiv.appendChild(dueDateLabel)
const dueDateInput = document.createElement("input");
dueDateInput.classList.add("dueDateInput")
dueDateInput.type = "date";
dueDateDiv.appendChild(dueDateInput)

const prioritiesDiv = document.createElement("div")
prioritiesDiv.classList.add("prioritiesDiv")
dialog.appendChild(prioritiesDiv);
const priorityH3 = document.createElement("h3");
priorityH3.textContent = "Priority:"
priorityH3.classList.add("priorityH3")
prioritiesDiv.appendChild(priorityH3)
const highPriorityDiv = document.createElement("div");
highPriorityDiv.classList.add("highPriorityDiv");
prioritiesDiv.appendChild(highPriorityDiv)
const highPriorityLabel = document.createElement("label")
highPriorityLabel.textContent = "Very High"
highPriorityDiv.appendChild(highPriorityLabel)
const highPriorityCheckbox = document.createElement("input");
highPriorityCheckbox.type = "radio"
highPriorityCheckbox.setAttribute("name", "radio")
highPriorityCheckbox.setAttribute("value", "highPriority")
highPriorityDiv.appendChild(highPriorityCheckbox);
const mediumPriorityDiv = document.createElement("div");
mediumPriorityDiv.classList.add("mediumPriorityDiv")
prioritiesDiv.appendChild(mediumPriorityDiv)
const mediumPriorityLabel = document.createElement("label")
mediumPriorityLabel.textContent = "Medium"
mediumPriorityDiv.appendChild(mediumPriorityLabel);
const mediumPriorityCheckbox = document.createElement("input");
mediumPriorityCheckbox.type = "radio";
mediumPriorityCheckbox.setAttribute("name", "radio")
mediumPriorityCheckbox.setAttribute("value", "mediumPriority")
mediumPriorityDiv.appendChild(mediumPriorityCheckbox);
const lowPriorityDiv = document.createElement("div")
lowPriorityDiv.classList.add("lowPriorityDiv")
prioritiesDiv.appendChild(lowPriorityDiv)
const lowPriorityLabel = document.createElement("label")
lowPriorityLabel.textContent = "Low"
lowPriorityDiv.appendChild(lowPriorityLabel)
const lowPriorityCheckbox = document.createElement("input")
lowPriorityCheckbox.type = "radio";
lowPriorityCheckbox.setAttribute("name", "radio")
lowPriorityCheckbox.setAttribute("value", "lowPriority")
// console.log(lowPriorityCheckbox.value);
lowPriorityDiv.appendChild(lowPriorityCheckbox)



const notesTextArea = document.createElement("textarea")
notesTextArea.placeholder = "Add your Notes here.";
notesTextArea.classList.add("notesTextArea")
dialog.appendChild(notesTextArea)

function displayRadioValue() {
    var ele = document.getElementsByName('radio');

    for (let i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            return ele[i].value;
    }
}

//the problem is u want one compiled and want each one from it specifically.

//when click Add, every value of popup properties to object.

//create UI 

//testing
// const date = document.querySelector(".date");
// const addButton = document.querySelector(".addButton");

// addButton.addEventListener("click", () => {
//     console.log(date.value);
// })

class Todos {
    constructor(title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }
}

// textAreaDescription, dueDateInput,  ,notesTextArea
const todo = new Todos(inputTitle, textAreaDescription, dueDateInput, displayRadioValue, notesTextArea)


//DOM LOGIC
const addBtn = document.querySelector(".addBtn")
const tasksUI = document.querySelector(".tasksUI")

addBtn.addEventListener("click", () => {

    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todoDiv");
    tasksUI.appendChild(todoDiv);

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
    todoTitle.textContent = todo.title.value;
    todoTitleDateUIdiv.appendChild(todoTitle);

    const todoDate = document.createElement("h3");
    todoDate.classList.add("todoDate");
    todoDate.textContent = todo.dueDate.value;
    todoTitleDateUIdiv.appendChild(todoDate);


    inputTitle.value = '';
    dueDateInput.value = '';
    dialog.close();

    // const todoTitle=document.createElement('')
    // console.log(todo.title.value,);
    // console.log(todo.description.value);
    // console.log(todo.dueDate.value);
    // console.log(todo.priority.value);
    // console.log(todo.priority());
    // console.log(todo.notes.value);


})

//when again click on add task, the inputTitle value should gone.

//when click add, the selected radio box should be in the console.
//all value should be in todo object

//now its time for dom logic.

//when click, title and date should be display at homepage.

//div
//div title
//div date 
// ......



//Tasks should be stored in 'Default Project' page.

const defaultProject = document.querySelector(".defaultProject")
defaultProject.addEventListener("DOMContentLoaded", () => {
    console.log('alo');
})
// const completedTodos = document.querySelector('.completedTodos')
// completedTodos.addEventListener("click", () => {
//     tasksUI.textContent = '';
// })


//When click `Completed Todos`, current page 

//When I click radioUI, the item should be added in `Completed Todos`.
//todoDiv should be delete in current page 

