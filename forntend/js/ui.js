export function createTodoElement(todo) {
    const li = document.createElement("li");
    li.classList.add("task");
    li.dataset.id = todo.id;
    li.dataset.completed = todo.completed;

    if (todo.completed) {
        li.classList.add("completed");
    }

    li.innerHTML = `<span class="task-text">${todo.name}</span><button class="delete-btn">Delete</button>`;
    return li;
}
