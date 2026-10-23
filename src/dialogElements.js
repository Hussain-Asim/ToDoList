const inputTitle = document.createElement("input");
inputTitle.type = "text";
inputTitle.placeholder = "Title";
inputTitle.classList.add("inputTitle")
dialog.appendChild(inputTitle);

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
lowPriorityDiv.appendChild(lowPriorityCheckbox)

const notesTextArea = document.createElement("textarea")
notesTextArea.placeholder = "Add your Notes here.";
notesTextArea.classList.add("notesTextArea")
dialog.appendChild(notesTextArea)


export { inputTitle, textAreaDescription, dueDateInput, notesTextArea };