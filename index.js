// TODO APP
// 1-) Start
// 2-) Access the "Add" button, assign to a variable named addBtn
// 3-) Access the input element, assign to a variable named todoInput
// 4-) Access the task list element, assign to a variable named todoList
// 5-) Add a click event listener to addBtn, calling the function addTask
// 6-) Create a function named renderTodoItem that takes todoText as a parameter:
//    - Add "list-group" and "list-group-flush" classes to todoList
//    - Create a "li" element, assign to listItem
//    - Add classes "list-group-item", "d-flex", "justify-content-between", and "align-items-center" to listItem
//    - Create a "span" element, assign to buttonContainer
//    - Create a "p" element, assign to textElement
//    - Set textElement's inner text to todoText
//    - Append textElement to listItem
//    - Create a "button" element, assign to completeButton
//    - Add classes "btn", "btn-success", "btn-sm", and "me-1" to completeButton
//    - Set completeButton's width to "80px"
//    - Set completeButton's inner text to "Complete"
//    - Append completeButton to buttonContainer
//    - Create a "button" element, assign to deleteButton
//    - Add classes "btn", "btn-danger", "btn-sm", and "me-1" to deleteButton
//    - Set deleteButton's width to "80px"
//    - Set deleteButton's inner text to "Delete"
//    - Append deleteButton to buttonContainer
//    - Append buttonContainer to listItem
//    - Append listItem to todoList

// 7-) Create a function named addTask:
//    - If todoInput's value is empty:
//        - Show an alert: "You cannot submit an empty task!"
//    - Else:
//        - Call the renderTodoItem function with todoInput's value as a parameter

// 8-) Add enter keypress to the todoInput.

// 9-) Add click event listener to the completeButton
//    - Code the toggleComplete function and in that function when the button clicked the buttons upper parent element will be assigned with the checked class by that function.

// 10-) Add removeTask function

// 11-) End

// ADDING TASK TO THE LIST
let addBtn = document.getElementById("add_btn")
let todoInput = document.getElementById("todo_input")
let todoList = document.getElementById("todo_list")

// COMPLETE TASK FUNCTION
const toggleComplete = (event) => {
    event.currentTarget.parentElement.parentElement.classList.toggle("checked")
}

// REMOVE TASK FUNCTION
const removeTask = (event) => {
    todoList.removeChild(event.currentTarget.parentElement.parentElement)
}

const renderTodoItem = (todoText) => {
    // UL ELEMENT
    todoList.classList.add("list-group", "list-group-flush")

    // LIST ELEMENT
    let todoElement = document.createElement("li")
    todoElement.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center", "justify-content-center")

    let buttonContainer = document.createElement("span")

    // TEXT
    let textElement = document.createElement("p")
    textElement.innerText = todoText
    textElement.classList.add("todo_input")
    todoElement.appendChild(textElement)

    // COMPLETE BUTTON
    let completeButton = document.createElement("button")
    completeButton.classList.add("btn", "btn-success", "btn-sm", "me-1")
    completeButton.style.width = "80px"
    completeButton.innerText = "Complete"
    
    completeButton.addEventListener("click", toggleComplete)

    buttonContainer.appendChild(completeButton)

    // DELETE BUTTON
    let deleteButton = document.createElement("button")
    deleteButton.classList.add("btn", "btn-danger", "btn-sm", "me-1")
    deleteButton.style.width = "80px"
    deleteButton.innerText = "Delete"

    deleteButton.addEventListener("click", removeTask   )

    buttonContainer.appendChild(deleteButton)

    todoElement.appendChild(buttonContainer)

    todoList.appendChild(todoElement)

    todoInput.value = ""
    todoInput.focus();
}

// ADD TASK FUNCTION
const addTask = () => {
    if (todoInput.value === "") {
        alert("You can not pass an empty input!")
    } else {
        renderTodoItem(todoInput.value)
    }
}

// ADD ENTER KEYPRESS EVENT LISTENER
todoInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter"){
        addTask()
    }
})

addBtn.addEventListener("click", addTask)
