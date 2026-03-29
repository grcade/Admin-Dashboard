
import Database from 'better-sqlite3';
const db = new Database('dashboard.db', { verbose: console.log });

function initializeDatabase() {

    db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            role TEXT NOT NULL
        );
    `);

    db.exec(`
        CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT,
            price REAL NOT NULL,
            stock INTEGER NOT NULL,
            category TEXT,
            status TEXT
        );
    `);

    db.exec(`
        CREATE TABLE IF NOT EXISTS orders (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            customer_email TEXT NOT NULL,
            amount REAL NOT NULL,
            date TEXT NOT NULL,
            quantity INTEGER NOT NULL,
            items TEXT NOT NULL,
            status TEXT
        );
    `);


    const adminExists = db.prepare('SELECT 1 FROM users WHERE email = ?').get('admin@example.com');
    if (!adminExists) {
        db.prepare('INSERT INTO users (name, email, role) VALUES (?, ?, ?)')
            .run('Admin', 'admin@example.com', 'admin');
        console.log('Seeded admin user.');
    }
}


// initializeDatabase();

export { db, initializeDatabase };
