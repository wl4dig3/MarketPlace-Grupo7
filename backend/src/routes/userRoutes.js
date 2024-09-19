import express from 'express';
import { 
    createUserController, 
    loginUserController, 
    updateUserController , 
    deleteUserController
} from '../controllers/userController.js';
import authenticateToken from '../middlewares/authenticateToken.js';

const router = express.Router();

router.post('/register', createUserController);
router.post('/login', loginUserController);
router.get('/profile', authenticateToken, loginUserController);
router.put('/profile', authenticateToken, updateUserController);
router.delete('/profile', authenticateToken, deleteUserController);

export default router;
