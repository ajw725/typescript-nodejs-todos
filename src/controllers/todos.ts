import { RequestHandler } from 'express';

import { Todo } from '../models/todo';

const TODOS: Todo[] = [];
type TodoParams = { text: string };

export const listTodos: RequestHandler = (_req, res, _next) => {
  res.status(200).json(TODOS);
};

export const createTodo: RequestHandler = (req, res, _next) => {
  const text = (req.body as TodoParams).text;

  if (text) {
    const todo = new Todo(Math.random().toString(), text);
    TODOS.push(todo);

    res.status(201).json({ message: 'Created Todo', todo: todo });
  } else {
    res.status(422).json({ error: 'Must provide text for todo' });
  }
};

export const updateTodo: RequestHandler = (req, res, _next) => {
  const todoId = req.params.id;
  const todo = TODOS.find((t) => t.id === todoId);

  if (todo) {
    const text = (req.body as TodoParams).text;
    if (text) {
      todo.text = text;
      res.status(200).json({ message: 'Updated todo', todo: todo });
    } else {
      res.status(422).json({ error: 'Must provide text for todo' });
    }
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
};

export const deleteTodo: RequestHandler = (req, res, _next) => {
  const todoId = req.params.id;
  const idx = TODOS.findIndex((t) => t.id === todoId);

  if (idx >= 0) {
    TODOS.splice(idx, 1);
    res.status(200).json({ message: 'Todo deleted' });
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
};
