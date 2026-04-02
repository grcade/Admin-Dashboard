import express from 'express';
import * as customersController from '../Controllers/customers.controller.js';

const router = express.Router();

router.get('/', customersController.getAllCustomers);
router.get('/:id', customersController.getCustomerById);
router.post('/', customersController.createCustomer);
router.put('/:id', customersController.updateCustomer);
router.delete('/:id', customersController.deleteCustomer);

export default router;
