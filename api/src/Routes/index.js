import express from 'express';
import customerRoutes from './customers.routes.js';
import orderRoutes from './orders.routes.js';
import productRoutes from './products.routes.js';
    import dashboardRoutes from './dashboard.routes.js';

const router = express.Router();

router.use('/customers', customerRoutes);
router.use('/orders', orderRoutes);
router.use('/products', productRoutes);
router.use('/dashboard', dashboardRoutes);

export default router;
