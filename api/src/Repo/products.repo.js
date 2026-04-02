import { db } from '../Utils/db.js';


export function getAllProducts({ offset = 0, limit = 10 } = {}) {
    const data = db.prepare('SELECT * FROM products ORDER BY id LIMIT ? OFFSET ?').all(limit, offset);
    const total = db.prepare('SELECT COUNT(*) as count FROM products').get().count;
    return { data, total };
}

export function getProductById(id) {
    return db.prepare('SELECT * FROM products WHERE id = ?').get(id);
}

export function createProduct({ name, description, price, stock, category, status }) {
    const stmt = db.prepare('INSERT INTO products (name, description, price, stock, category, status) VALUES (?, ?, ?, ?, ?, ?)');
    const info = stmt.run(name, description, price, stock, category, status);
    return info.lastInsertRowid;
}

export function updateProduct(id, { name, description, price, stock, category, status }) {
    const stmt = db.prepare('UPDATE products SET name=?, description=?, price=?, stock=?, category=?, status=? WHERE id=?');
    return stmt.run(name, description, price, stock, category, status, id).changes;
}

export function deleteProduct(id) {
    return db.prepare('DELETE FROM products WHERE id=?').run(id).changes;
}

export const getProductCategoriesRepo = () => {
    const categories = db.prepare('SELECT DISTINCT category FROM products').all();

    return categories;
}
