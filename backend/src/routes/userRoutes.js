import express from 'express';
import { createUserController, loginUserController, logoutUserController } from '../controllers/userController.js';
import authenticateToken from '../middlewares/authMiddleware.js';

const router = express.Router();

// Ruta para crear usuario
router.post('/users', createUserController);

// Ruta para iniciar sesión
router.post('/login', loginUserController);

// Ruta logout
router.post('/logout', logoutUserController);

// Ruta protegida
router.get('/profile', authenticateToken, (req, res) => {
  res.json({ message: 'Esta es una ruta protegida' });
});

export default router;
