import { db } from '../Utils/db.js';

export function getDashboardStats() {
    const totalSales = db.prepare('SELECT SUM(amount) as totalSales FROM orders').get().totalSales || 0;
    const totalOrders = db.prepare('SELECT COUNT(*) as totalOrders FROM orders').get().totalOrders || 0;
    const totalCustomers = db.prepare('SELECT COUNT(*) as totalCustomers FROM users WHERE role = ?').get('customer').totalCustomers || 0;
    const totalProducts = db.prepare('SELECT COUNT(*) as totalProducts FROM products').get().totalProducts || 0;
    const activeCustomers = db.prepare('SELECT COUNT(*) as activeCustomers FROM users WHERE role = ? AND status = ?').get('customer', 'active').activeCustomers || 0;
    
    const recentOrders = db.prepare(`
        SELECT id, customer_email, amount, date, status 
        FROM orders 
        ORDER BY date DESC 
        LIMIT 5
    `).all();

    return { 
        totalSales: parseFloat(totalSales.toFixed(2)), 
        totalOrders, 
        totalCustomers, 
        totalProducts, 
        activeCustomers,
        recentOrders
    };
}

export function getMonthlySales() {
    return db.prepare(`
        SELECT strftime('%Y-%m', date) as month, SUM(amount) as totalSales
        FROM orders
        GROUP BY month
        ORDER BY month
    `).all();
}

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

