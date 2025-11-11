
    // Get references to DOM elements
    let todoItemsContainer = document.getElementById("todoItemsContainer");
    let addTodoButton = document.getElementById("addTodoButton");
    let saveTodoButton = document.getElementById("saveTodoButton");

    // Retrieve existing todos from localStorage (if any)
    function getTodoListFromLocalStorage() {
        let stringifiedTodoList = localStorage.getItem("todoList");
        let parsedTodoList = JSON.parse(stringifiedTodoList);
        return parsedTodoList === null ? [] : parsedTodoList;
    }

    // Initialize the todo list and count
    let todoList = getTodoListFromLocalStorage();
    let todosCount = todoList.length;

    // Save current list to localStorage when 'Save' button clicked
    saveTodoButton.onclick = function() {
        localStorage.setItem("todoList", JSON.stringify(todoList));
    };

    // Add new todo to list and DOM
    function onAddTodo() {
        let userInputElement = document.getElementById("todoUserInput");
        let userInputValue = userInputElement.value.trim();

        // Prevent adding empty tasks
        if (userInputValue === "") {
            alert("Enter Valid Text");
            return;
        }

        // Increment ID counter
        todosCount++;

        // Create a new todo object
        let newTodo = {
            text: userInputValue,
            uniqueNo: todosCount,
            isChecked: false
        };

        // Add it to the array and UI
        todoList.push(newTodo);
        createAndAppendTodo(newTodo);

        // Clear input field after adding
        userInputElement.value = "";
    }

    // Bind the add button to addTodo function
    addTodoButton.onclick = function() {
        onAddTodo();
    };

    // Handle status change (checked/unchecked)
    function onTodoStatusChange(checkboxId, labelId, todoId) {
        let checkboxElement = document.getElementById(checkboxId);
        let labelElement = document.getElementById(labelId);

        // Visually toggle the completed style
        labelElement.classList.toggle("checked");

        // Find and update the corresponding todo object
        let todoObjectIndex = todoList.findIndex(function(eachTodo) {
            return "todo" + eachTodo.uniqueNo === todoId;
        });

        let todoObject = todoList[todoObjectIndex];
        todoObject.isChecked = !todoObject.isChecked; // Toggle boolean
    }

    // Delete todo from list and UI
    function onDeleteTodo(todoId) {
        let todoElement = document.getElementById(todoId);
        todoItemsContainer.removeChild(todoElement);

        // Remove from array by finding matching id
        let deleteElementIndex = todoList.findIndex(function(eachTodo) {
            return "todo" + eachTodo.uniqueNo === todoId;
        });

        todoList.splice(deleteElementIndex, 1);
    }

    // Create and display a todo item in the DOM
    function createAndAppendTodo(todo) {
        let todoId = "todo" + todo.uniqueNo;
        let checkboxId = "checkbox" + todo.uniqueNo;
        let labelId = "label" + todo.uniqueNo;

        // Create the main list item container
        let todoElement = document.createElement("li");
        todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
        todoElement.id = todoId;
        todoItemsContainer.appendChild(todoElement);

        // Create checkbox element
        let inputElement = document.createElement("input");
        inputElement.type = "checkbox";
        inputElement.id = checkboxId;
        inputElement.checked = todo.isChecked;
        inputElement.classList.add("checkbox-input");

        // When checkbox changes, update status
        inputElement.onclick = function() {
            onTodoStatusChange(checkboxId, labelId, todoId);
        };

        todoElement.appendChild(inputElement);

        // Label container holds task text and delete icon
        let labelContainer = document.createElement("div");
        labelContainer.classList.add("label-container", "d-flex", "flex-row");
        todoElement.appendChild(labelContainer);

        // Task label text
        let labelElement = document.createElement("label");
        labelElement.setAttribute("for", checkboxId);
        labelElement.id = labelId;
        labelElement.classList.add("checkbox-label");
        labelElement.textContent = todo.text;

        // Apply strike-through if already marked done
        if (todo.isChecked) {
            labelElement.classList.add("checked");
        }

        labelContainer.appendChild(labelElement);

        // Delete icon setup
        let deleteIconContainer = document.createElement("div");
        deleteIconContainer.classList.add("delete-icon-container");
        labelContainer.appendChild(deleteIconContainer);

        let deleteIcon = document.createElement("i");
        deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

        // Handle delete click
        deleteIcon.onclick = function() {
            onDeleteTodo(todoId);
        };

        deleteIconContainer.appendChild(deleteIcon);
    }

    // On page load, recreate todos saved in localStorage
    for (let todo of todoList) {
        createAndAppendTodo(todo);
    }
