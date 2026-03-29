import { db } from '../Utils/db.js';

export function getAllCustomers() {
    return db.prepare('SELECT * FROM users WHERE role = ?').all('customer');
}

export function getCustomerById(id) {
    return db.prepare('SELECT * FROM users WHERE id = ? AND role = ?').get(id, 'customer');
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
