import { db } from '../Utils/db.js';

export function getAllUsers() {
    return db.prepare('SELECT * FROM users').all();
}

export function getUserById(id) {
    return db.prepare('SELECT * FROM users WHERE id = ?').get(id);
}

export function getUserByEmail(email) {
    return db.prepare('SELECT * FROM users WHERE email = ?').get(email);
}

export function createUser({ name, email, role }) {
    const stmt = db.prepare('INSERT INTO users (name, email, role) VALUES (?, ?, ?)');
    const info = stmt.run(name, email, role);
    return info.lastInsertRowid;
}

export function updateUser(id, { name, email, role }) {
    const stmt = db.prepare('UPDATE users SET name=?, email=?, role=? WHERE id=?');
    return stmt.run(name, email, role, id).changes;
}

export function deleteUser(id) {
    return db.prepare('DELETE FROM users WHERE id=?').run(id).changes;
}
