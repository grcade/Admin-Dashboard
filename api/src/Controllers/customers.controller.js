import * as customersRepo from '../Repo/customers.repo.js';

export const getAllCustomers = (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 10;
        const page = parseInt(req.query.page) || 0;
        const offset = (page - 1) * limit;


        const { customers, totalCustomers } = customersRepo.getAllCustomers(limit, offset);
        res.json({ data: customers, totalCustomers });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getCustomerById = (req, res) => {
    try {
        const customer = customersRepo.getCustomerById(req.params.id);
        if (customer) {
            res.json(customer);
        } else {
            res.status(404).json({ message: 'Customer not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createCustomer = (req, res) => {
    try {
        const { name, email, phone, address, zip_code, registration_date, status, total_orders, total_amount_spent } = req.body;
        const id = customersRepo.createCustomer({ name, email, phone, address, zip_code, registration_date, status, total_orders, total_amount_spent });
        res.status(201).json({ id, name, email, phone, address, zip_code, registration_date, status, total_orders, total_amount_spent });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateCustomer = (req, res) => {
    try {
        const { name, email, phone, address, zip_code, registration_date, status, total_orders, total_amount_spent } = req.body;
        const changes = customersRepo.updateCustomer(req.params.id, { name, email, phone, address, zip_code, registration_date, status, total_orders, total_amount_spent });
        if (changes) {
            res.json({ id: req.params.id, name, email, phone, address, zip_code, registration_date, status, total_orders, total_amount_spent });
        } else {
            res.status(404).json({ message: 'Customer not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteCustomer = (req, res) => {
    try {
        const changes = customersRepo.deleteCustomer(req.params.id);
        if (changes) {
            res.json({ message: 'Customer deleted' });
        } else {
            res.status(404).json({ message: 'Customer not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
