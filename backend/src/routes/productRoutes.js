import express from 'express';
import { createProductController,
    getProductsController,
    getProductByIdController,
    getProductsFilteredController,
    updateProductController ,
    deleteProductController
} from '../controllers/productController.js'; 
import authenticateToken from '../middlewares/authenticateToken.js';

const router = express.Router();

router.get('/product/:id', getProductByIdController);
router.get('/products', getProductsController);
router.get('/products/category/:category', getProductsFilteredController);
router.post('/product', authenticateToken, createProductController);
router.put('/product/:id', authenticateToken, updateProductController);
router.delete('/product/:id', authenticateToken, deleteProductController);

export default router;
