"use strict";

const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector("#todo-form");
const taskInput = document.querySelector("#task-input");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
    todoList.innerHTML = "";

    todos.forEach((todo) => {
        const li = document.createElement("li");
        li.classList.add("task");
        if (todo.completed) {
            li.classList.add("completed");
        }

        li.innerHTML = `<span data-id="${todo.id}" class="task-text">${todo.name}</span><button data-id="${todo.id}" class="delete-btn">Delete</button>`;
        todoList.appendChild(li);
    });
}

todoList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
        const id = e.target.dataset.id;

        todos = todos.filter((todo) => todo.id !== id);
        localStorage.setItem("todos", JSON.stringify(todos));

        renderTodos();
    } else if (e.target.classList.contains("task-text")) {
        const id = e.target.dataset.id;

        todos = todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed,
                };
            }
            return todo;
        });
        localStorage.setItem("todos", JSON.stringify(todos));
        renderTodos();
    }
});

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const todoData = new FormData(e.target);
    const todoName = todoData.get("todo").trim();
    if (todoName) {
        todos.push({
            id: `${Math.random()}--${todoName}`,
            name: todoData.get("todo").trim(),
            completed: false,
        });
        localStorage.setItem("todos", JSON.stringify(todos));
        renderTodos();
    } else {
        console.log("Enter todo name!");
    }
    taskInput.value = "";
});

renderTodos();
