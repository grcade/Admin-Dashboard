import { db } from '../Utils/db.js';

export function getDashboardStats() {
    const totalSales = db.prepare('SELECT SUM(amount) as totalSales FROM orders').get().totalSales || 0;
    const totalOrders = db.prepare('SELECT COUNT(*) as totalOrders FROM orders').get().totalOrders || 0;
    const totalCustomers = db.prepare('SELECT COUNT(*) as totalCustomers FROM users WHERE role = ?').get('customer').totalCustomers || 0;
    return { totalSales, totalOrders, totalCustomers };
}

export function getMonthlySales() {
    return db.prepare(`
        SELECT strftime('%Y-%m', date) as month, SUM(amount) as totalSales
        FROM orders

export function getCustomerByEmail(email) {
    return db.prepare('SELECT * FROM users WHERE email = ? AND role = ?').get(email, 'customer');
}

export function updateCustomer(id, { name, email }) {
    const stmt = db.prepare('UPDATE users SET name=?, email=? WHERE id=? AND role=?');
    return stmt.run(name, email, id, 'customer').changes;
}

export function deleteCustomer(id) {
    return db.prepare('DELETE FROM users WHERE id=? AND role=?').run(id, 'customer').changes;
}

        GROUP BY month
        ORDER BY month
    `).all();
}
