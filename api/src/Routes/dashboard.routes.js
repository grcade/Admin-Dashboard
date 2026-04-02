import express from 'express';
import * as dashboardController from '../Controllers/dashboard.controller.js';

const router = express.Router();

router.get('/stats', dashboardController.getStats);
router.get('/sales', dashboardController.getMonthlySales);

export default router;
