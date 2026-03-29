import { db } from '../Utils/db.js';

export function getAllOrders() {
    return db.prepare('SELECT * FROM orders').all();
}

export function getOrderById(id) {
    return db.prepare('SELECT * FROM orders WHERE id = ?').get(id);
}

export function createOrder({ customer_email, amount, date, quantity, items, status }) {
    const stmt = db.prepare('INSERT INTO orders (customer_email, amount, date, quantity, items, status) VALUES (?, ?, ?, ?, ?, ?)');
    const info = stmt.run(customer_email, amount, date, quantity, items, status);
    return info.lastInsertRowid;
}

export function updateOrder(id, { customer_email, amount, date, quantity, items, status }) {
    const stmt = db.prepare('UPDATE orders SET customer_email=?, amount=?, date=?, quantity=?, items=?, status=? WHERE id=?');
    return stmt.run(customer_email, amount, date, quantity, items, status, id).changes;
}

export function deleteOrder(id) {
    return db.prepare('DELETE FROM orders WHERE id=?').run(id).changes;
}
