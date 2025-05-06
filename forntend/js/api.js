import { BASE_URL, TODOS_URL } from "./config.js";

export async function getTodos() {
    const res = await fetch(`${BASE_URL}${TODOS_URL}`);

    return res.json();
}
export async function addTodo(newTodoName) {
    const res = await fetch(`${BASE_URL}${TODOS_URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: newTodoName }),
    });

    return res.json();
}
export async function updateTodoStatus(todoId, todoStatus) {
    const res = await fetch(`${BASE_URL}${TODOS_URL}/${todoId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ completed: todoStatus }),
    });
    return res.json();
}

export async function deleteTodo(todoId) {
    const res = await fetch(`${BASE_URL}${TODOS_URL}/${todoId}`, {
        method: "DELETE",
    });
    return null;
}
