import express from 'express';
import { createUserController, getUserController, deleteUserController } from '../controllers/userController.js';

const router = express.Router();

router.post('/users', createUserController);
router.get('/users/:id', getUserController);
router.delete('/users/:id', deleteUserController);

export default router;
