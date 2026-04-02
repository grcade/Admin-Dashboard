import * as ordersRepo from '../Repo/orders.repo.js';

export const getAllOrders = (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 12;
        const page = parseInt(req.query.page) || 0;
        const offset = (page - 1) * limit;
        const { orders, totalOrders } = ordersRepo.getAllOrders(limit, offset);


        res.json({ data
: orders, totalOrders });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

export const getOrderById = (req, res) => {
    try {
        const order = ordersRepo.getOrderById(req.params.id);
        if (order) {
            order.items = JSON.parse(order.items);
            res.json(order);
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createOrder = (req, res) => {
    try {
        const { customer_email, amount, date, quantity, items, status } = req.body;
        const id = ordersRepo.createOrder({ customer_email, amount, date, quantity, items: JSON.stringify(items), status });
        res.status(201).json({ id, customer_email, amount, date, quantity, items, status });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}
export const updateOrder = (req, res) => {
    try {
        const { status, ...rest } = req.body;
        const id = req.params.id;

        // If only status is provided (common for status updates)
        if (status && Object.keys(rest).length === 0) {
            const changes = ordersRepo.updateOrderStatus(id, status);
            if (changes) {
                return res.json({ id, status });
            }
        }


        const existingOrder = ordersRepo.getOrderById(id);
        if (!existingOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }

        const updatedData = {
            customer_email: req.body.customer_email || existingOrder.customer_email,
            amount: req.body.amount !== undefined ? req.body.amount : existingOrder.amount,
            date: req.body.date || existingOrder.date,
            quantity: req.body.quantity !== undefined ? req.body.quantity : existingOrder.quantity,
            items: req.body.items ? JSON.stringify(req.body.items) : existingOrder.items,
            status: req.body.status || existingOrder.status
        };

        const changes = ordersRepo.updateOrder(id, updatedData);
        if (changes) {
            res.json({ id, ...updatedData, items: req.body.items || JSON.parse(existingOrder.items) });
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log(error);
    }
};

export const deleteOrder = (req, res) => {
    try {
        const changes = ordersRepo.deleteOrder(req.params.id);
        if (changes) {
            res.json({ message: 'Order deleted' });
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
