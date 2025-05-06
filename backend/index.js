const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

const todos = [
    {
        id: uuidv4(),
        name: "First todo",
        completed: false,
    },
];
app.get("/todos", (req, res) => {
    res.json(todos);
});
app.post("/todos", (req, res) => {
    const { name } = req.body;

    if (!name) {
        res.status(400).json({ error: "Not all information given!" });
    }

    const newTodo = {
        id: uuidv4(),
        name,
        completed: false,
    };

    todos.push(newTodo);

    res.status(201).json(newTodo);
});
app.put("/todos/:id", (req, res) => {
    const todoId = req.params.id;
    const { completed } = req.body;

    const todoIndex = todos.findIndex((todo) => todo.id === todoId);

    if (todoIndex === -1) {
        res.status(404).json({ error: "Not found!" });
    }

    todos[todoIndex] = { ...todos[todoIndex], completed };

    res.status(200).json(todos[todoIndex]);
});

app.delete("/todos/:id", (req, res) => {
    const todoId = req.params.id;

    console.log(todoId);

    const todoIndex = todos.findIndex((todo) => todo.id === todoId);

    if (todoIndex === -1) {
        res.status(404).json({ error: "Not found!" });
    }

    todos.splice(todoIndex, 1);

    res.status(204).json();
});

app.listen(PORT, () => {
    console.log("Hello from my first server!");
});
