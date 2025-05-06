"use strict";

import { getTodos, addTodo, updateTodoStatus, deleteTodo } from "./api.js";
import { createTodoElement } from "./ui.js";

const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector("#todo-form");
const taskInput = document.querySelector("#task-input");

async function renderTodos() {
    todoList.innerHTML = "";
    try {
        let todos = await getTodos();

        todos.forEach((todo) => {
            todoList.appendChild(createTodoElement(todo));
        });
    } catch (error) {
        console.log(error);
    }
}

todoList.addEventListener("click", async (e) => {
    if (e.target.classList.contains("delete-btn")) {
        const todoElement = e.target.closest(".task");
        const id = todoElement.dataset.id;

        try {
            await deleteTodo(id);
            await renderTodos();
        } catch (error) {
            console.log(error);
        }
    } else if (e.target.classList.contains("task-text")) {
        const todoElement = e.target.closest(".task");
        const id = todoElement.dataset.id;
        const todoStatus = todoElement.dataset.completed === "true";

        try {
            await updateTodoStatus(id, !todoStatus);
            await renderTodos();
        } catch (error) {
            console.log(error);
        }
    }
});

todoForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const todoData = new FormData(e.target);
    const todoName = todoData.get("todo").trim();
    if (todoName) {
        try {
            await addTodo(todoName);
            await renderTodos();
        } catch (error) {
            console.log(error);
        }
    } else {
        console.log("Enter todo name!");
    }
    taskInput.value = "";
});

renderTodos();
