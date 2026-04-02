import { db } from '../Utils/db.js';

export function getAllCustomers(limit, offset) {
    const customers = db.prepare(`
        SELECT u.*,
        (SELECT COUNT(*) FROM orders WHERE customer_email = u.email) as total_orders,
        (SELECT IFNULL(SUM(amount), 0) FROM orders WHERE customer_email = u.email) as total_amount_spent
        FROM users u
        WHERE u.role = ? ORDER BY u.id LIMIT ? OFFSET ?
    `).all('customer', limit, offset);

    const totalCustomers = db.prepare('SELECT COUNT(*) as count FROM users WHERE role = ?').get('customer');
    return { customers, totalCustomers };
}

export function getCustomerById(id) {
    return db.prepare(`
        SELECT u.*,
        (SELECT COUNT(*) FROM orders WHERE customer_email = u.email) as total_orders,
        (SELECT IFNULL(SUM(amount), 0) FROM orders WHERE customer_email = u.email) as total_amount_spent
        FROM users u
        WHERE u.id = ? AND u.role = ?
    `).get(id, 'customer');
}

export function getCustomerByEmail(email) {
    return db.prepare('SELECT * FROM users WHERE email = ? AND role = ?').get(email, 'customer');
}

export function createCustomer({ name, email, phone, address, zip_code, registration_date, status, total_orders = 0, total_amount_spent = 0 }) {
    const stmt = db.prepare('INSERT INTO users (name, email, role, phone, address, zip_code, registration_date, status, total_orders, total_amount_spent) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');
    const info = stmt.run(name, email, 'customer', phone, address, zip_code, registration_date, status, total_orders, total_amount_spent);
    return info.lastInsertRowid;
}

export function updateCustomer(id, { name, email, phone, address, zip_code, registration_date, status, total_orders, total_amount_spent }) {
    const stmt = db.prepare('UPDATE users SET name=?, email=?, phone=?, address=?, zip_code=?, registration_date=?, status=?, total_orders=?, total_amount_spent=? WHERE id=? AND role=?');
    return stmt.run(name, email, phone, address, zip_code, registration_date, status, total_orders, total_amount_spent, id, 'customer').changes;
}

export function deleteCustomer(id) {
    return db.prepare('DELETE FROM users WHERE id=? AND role=?').run(id, 'customer').changes;
}
