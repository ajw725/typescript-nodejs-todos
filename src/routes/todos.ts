import { Router } from 'express';

import {
  createTodo,
  listTodos,
  updateTodo,
  deleteTodo,
} from '../controllers/todos';

const router = Router();

router.post('/', createTodo);

router.get('/', listTodos);

router.patch('/:id', updateTodo);

router.delete('/:id', deleteTodo);

export default router;
