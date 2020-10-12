"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.createTodo = exports.listTodos = void 0;
const todo_1 = require("../models/todo");
const TODOS = [];
exports.listTodos = (_req, res, _next) => {
    res.status(200).json(TODOS);
};
exports.createTodo = (req, res, _next) => {
    const text = req.body.text;
    if (text) {
        const todo = new todo_1.Todo(Math.random().toString(), text);
        TODOS.push(todo);
        res.status(201).json({ message: 'Created Todo', todo: todo });
    }
    else {
        res.status(422).json({ error: 'Must provide text for todo' });
    }
};
exports.updateTodo = (req, res, _next) => {
    const todoId = req.params.id;
    const todo = TODOS.find((t) => t.id === todoId);
    if (todo) {
        const text = req.body.text;
        if (text) {
            todo.text = text;
            res.status(200).json({ message: 'Updated todo', todo: todo });
        }
        else {
            res.status(422).json({ error: 'Must provide text for todo' });
        }
    }
    else {
        res.status(404).json({ error: 'Todo not found' });
    }
};
exports.deleteTodo = (req, res, _next) => {
    const todoId = req.params.id;
    const idx = TODOS.findIndex((t) => t.id === todoId);
    if (idx >= 0) {
        TODOS.splice(idx, 1);
        res.status(200).json({ message: 'Todo deleted' });
    }
    else {
        res.status(404).json({ error: 'Todo not found' });
    }
};
