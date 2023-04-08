
// Selecting necessary DOM elements
const taskInput = document.querySelector(".task-input input"), // input field for adding new tasks
    filters = document.querySelectorAll(".filters span"), // filter buttons for showing all, completed or pending tasks
    clearAll = document.querySelector(".clear-btn"), // button to clear all tasks
    taskBox = document.querySelector(".task-box"); // container for displaying tasks

// Initializing variables
let editId, // ID of task to be edited
    isEditTask = false, // boolean flag for checking if a task is being edited or not
    todos = JSON.parse(localStorage.getItem("todo-list")); // array of tasks fetched from local storage

// Adding event listeners to filter buttons
filters.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector("span.active").classList.remove("active"); // remove active class from currently active filter button
        btn.classList.add("active"); // add active class to clicked filter button
        showTodo(btn.id); // display tasks according to selected filter
    });
});

// Function to display tasks
function showTodo(filter) {
    let liTag = ""; // variable to store HTML string for displaying tasks
    if (todos) { // checking if tasks array is not empty
        todos.forEach((todo, id) => {
            let completed = todo.status == "completed" ? "checked" : ""; // checking if task is completed or not
            if (filter == todo.status || filter == "all") { // checking if task should be displayed according to selected filter
                liTag += `<li class="task">
                    <label for="${id}">
                        <input onclick="updateStatus(this)" type="checkbox" id="${id}" ${completed}>
                        <p class="${completed}">${todo.name}</p>
                    </label>
                    <div class="settings">
                        <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
                        <ul class="task-menu">
                            <li onclick='editTask(${id}, "${todo.name}")'><i class="uil uil-pen"></i>Edit</li>
                            <li onclick='deleteTask(${id}, "${filter}")'><i class="uil uil-trash"></i>Delete</li>
                        </ul>
                    </div>
                </li>`;
            }
        });
    }

    // Displaying tasks or a message if there are no tasks
    taskBox.innerHTML = liTag || `<span>You don't have any task here</span>`;

    // Checking if there are any tasks and updating clear all button accordingly
    let checkTask = taskBox.querySelectorAll(".task");
    !checkTask.length ? clearAll.classList.remove("active") : clearAll.classList.add("active");

    // Checking if task box has overflow and updating its class accordingly
    taskBox.offsetHeight >= 300 ? taskBox.classList.add("overflow") : taskBox.classList.remove("overflow");
}

// Displaying all tasks on page load
showTodo("all");

// Function to show task menu
function showMenu(selectedTask) {
    let menuDiv = selectedTask.parentElement.lastElementChild;
    menuDiv.classList.add("show");
    document.addEventListener("click", e => {
        if (e.target.tagName != "I" || e.target != selectedTask) {
            menuDiv.classList.remove("show");
        }
    });
}

// updates the status of a task when the checkbox is clicked
function updateStatus(selectedTask) {
    let taskName = selectedTask.parentElement.lastElementChild;
    if (selectedTask.checked) {
        taskName.classList.add("checked"); // add a class to indicate that the task is completed
        todos[selectedTask.id].status = "completed"; // update the status of the task in the todos array
    } else {
        taskName.classList.remove("checked"); // remove the completed class if the checkbox is unchecked
        todos[selectedTask.id].status = "pending"; // update the status of the task in the todos array
    }
    localStorage.setItem("todo-list", JSON.stringify(todos)); // save the updated todos array to local storage
}

// sets up the edit task mode and populates the input field with the current task name
function editTask(taskId, textName) {
    editId = taskId; // set the editId variable to the id of the task being edited
    isEditTask = true; // set the isEditTask flag to true to indicate that we are editing a task
    taskInput.value = textName; // populate the input field with the name of the task being edited
    taskInput.focus(); // set the focus on the input field
    taskInput.classList.add("active"); // add a class to indicate that the input field is in edit mode
}

// deletes a task from the todos array and updates the display
function deleteTask(deleteId, filter) {
    isEditTask = false; // set the isEditTask flag to false to indicate that we are not editing a task
    todos.splice(deleteId, 1); // remove the task with the given id from the todos array
    localStorage.setItem("todo-list", JSON.stringify(todos)); // save the updated todos array to local storage
    showTodo(filter); // update the display with the new todos list
}

// clears all tasks from the todos array and updates the display
clearAll.addEventListener("click", () => {
    isEditTask = false; // set the isEditTask flag to false to indicate that we are not editing a task
    todos.splice(0, todos.length); // remove all tasks from the todos array
    localStorage.setItem("todo-list", JSON.stringify(todos)); // save the updated todos array to local storage
    showTodo(); // update the display with the new todos list
});

// handles the user input and updates the todos array and display
taskInput.addEventListener("keyup", e => {
    let userTask = taskInput.value.trim(); // get the user input and remove any leading/trailing whitespace
    if (e.key == "Enter" && userTask) { // if the user presses enter and the input field is not empty
        if (!isEditTask) { // if we are not in edit mode
            todos = !todos ? [] : todos; // if todos is null or undefined, create an empty array
            let taskInfo = { name: userTask, status: "pending" }; // create a new task object
            todos.push(taskInfo); // add the new task to the todos array
        } else { // if we are in edit mode
            isEditTask = false; // set the isEditTask flag to false to indicate that we are not editing a task anymore
            todos[editId].name = userTask; // update the name of the task being edited in the todos array
        }
        taskInput.value = ""; // clear the input field
        localStorage.setItem("todo-list", JSON.stringify(todos)); //stores the current state of the "todos" array in the browser's local storage.
        showTodo(document.querySelector("span.active").id); //calls the "showTodo" function and passes the ID of the currently active filter as an argument.
    }
});