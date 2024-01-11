import express from 'express'
import { EditTodo, RemoveTodo, getTodo,AddToDo } from '../controllers/todoController.js';
const router = express.Router();
router.get('/get', getTodo)
router.post('/edit', EditTodo)
router.delete('/delete', RemoveTodo)
router.post('/add', AddToDo)


export default router;