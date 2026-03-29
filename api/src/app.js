import express from 'express';
import cors from 'cors';
import {  initializeDatabase } from './Utils/db.js';

const app = express();

app.use(cors());
app.use(express.json());
initializeDatabase()



app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the API!' });
});



export default app;

// crud ops for each of the following:
// orders: order id, customer id(email),  amount , date, quantity, items, and status
// dashboard info like total sales, total orders, total customers, etc.
// products: product id, name, description, price, stock, category, status(in or out of stock),
// customers: customer id, name, email, phone, address,zip code, registration date, and status(active or inactive), total orders, total amount spent
// month wise sale for graphs
