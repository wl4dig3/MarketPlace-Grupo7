import express from 'express';
import { createUserController, loginUserController } from '../controllers/userController.js';

const router = express.Router();
//Ruta para crear usuario
router.post('/user', createUserController);
//Ruta para el login del usuario
router.post('/user', loginUserController)


export default router;
