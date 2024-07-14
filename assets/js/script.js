document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const creationDate = new Date();
            const listItem = createTaskItem(taskText, creationDate);
            taskList.appendChild(listItem);
            taskInput.value = "";
        }
    }

    function createTaskItem(taskText, creationDate) {
        const listItem = document.createElement("li");

        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;
        taskSpan.classList.add("task-text");

        const dateSpan = document.createElement("span");
        dateSpan.textContent = `Created on: ${creationDate.toLocaleString()}`;
        dateSpan.classList.add("task-date");

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("edit");
        editButton.addEventListener("click", () => editTask(listItem, taskSpan));

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete");
        deleteButton.addEventListener("click", () => deleteTask(listItem));

        listItem.appendChild(taskSpan);
        listItem.appendChild(dateSpan);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        return listItem;
    }

    function editTask(listItem, taskSpan) {
        const newTaskText = prompt("Edit your task:", taskSpan.textContent);
        if (newTaskText !== null && newTaskText.trim() !== "") {
            taskSpan.textContent = newTaskText;
        }
    }

    function deleteTask(listItem) {
        taskList.removeChild(listItem);
    }
});
