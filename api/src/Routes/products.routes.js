import express from 'express';
import * as productsController from '../Controllers/products.controller.js';

const router = express.Router();

router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getProductById);
router.post('/', productsController.createProduct);
router.put('/:id', productsController.updateProduct);
router.delete('/:id', productsController.deleteProduct);
router.get('/categories/all', productsController.getProductCategories);

export default router;
