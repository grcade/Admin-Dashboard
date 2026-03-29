import { faker } from '@faker-js/faker';
import { createUser } from '../Repo/users.repo.js';
import { createProduct } from '../Repo/products.repo.js';
import { createOrder } from '../Repo/orders.repo.js';
import { db } from './db.js';

function randomStatus(list) {
    return list[Math.floor(Math.random() * list.length)];
}

async function seed() {
    // Clear tables except admin
    db.prepare('DELETE FROM orders').run();
    db.prepare('DELETE FROM products').run();
    db.prepare("DELETE FROM users WHERE email != 'admin@example.com'").run();

    // Seed users (customers)
    const userIds = [];
    for (let i = 0; i < 50; i++) {
        const name = faker.person.fullName();
        const email = faker.internet.email();
        const role = 'customer';
        const id = createUser({ name, email, role });
        userIds.push({ id, email });
    }

    // Seed products
    const productIds = [];
    for (let i = 0; i < 50; i++) {
        const name = faker.commerce.productName();
        const description = faker.commerce.productDescription();
        const price = parseFloat(faker.commerce.price({ min: 10, max: 500 }));
        const stock = faker.number.int({ min: 0, max: 100 });
        const category = faker.commerce.department();
        const status = stock > 0 ? 'in stock' : 'out of stock';
        const id = createProduct({ name, description, price, stock, category, status });
        productIds.push(id);
    }

    // Seed orders
    for (let i = 0; i < 50; i++) {
        const customer = faker.helpers.arrayElement(userIds);
        const amount = parseFloat(faker.commerce.price({ min: 20, max: 1000 }));
        const date = faker.date.between({ from: '2023-01-01', to: '2026-03-01' }).toISOString().split('T')[0];
        const quantity = faker.number.int({ min: 1, max: 5 });
        const items = JSON.stringify([
            {
                productId: faker.helpers.arrayElement(productIds),
                quantity: quantity,
            },
        ]);
        const status = randomStatus(['pending', 'completed', 'cancelled']);
        createOrder({
            customer_email: customer.email,
            amount,
            date,
            quantity,
            items,
            status,
        });
    }

    console.log('Seeded 50 users, products, and orders.');
}

seed();
