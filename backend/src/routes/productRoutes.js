import express from 'express';
import {  productController } from '../controllers/productController.js';

const router = express.Router();


router.get('/product/:id', productController.getProductLimitController);
router.get('/products', productController.getProductsController);
router.get('/products/category/:category', productController.getProductsFilteredController);
router.post('/product', productController.createProductController);


export default router;