const todoList = document.querySelector("#todo-list");
const taskInput = document.querySelector("#task-input");
const addTaskBtn = document.querySelector("#add-task-btn");

const tasks = ["task 1", "task 2", "task 3"];

function createTask(task) {
    const li = document.createElement("li");
    li.classList.add("task");
    li.innerHTML = `<span class="task-text">${task}</span> <button class="delete-btn">Delete</button>`;
    todoList.appendChild(li);
}

tasks.forEach((task) => createTask(task));

todoList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
        e.target.closest(".task").remove();
    } else if (e.target.classList.contains("task-text")) {
        e.target.closest(".task").classList.toggle("completed");
    }
});

addTaskBtn.addEventListener("click", () => {
    const newTask = taskInput.value.trim();
    if (newTask) {
        createTask(newTask);
    }
    taskInput.value = "";
});
