import * as productsRepo from '../Repo/products.repo.js';

export const getAllProducts = (req, res) => {
    try {
        const page = parseInt(req.query.page) || 0;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        const { data, total } = productsRepo.getAllProducts({ offset, limit });
        res.json({ data, total });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getProductById = (req, res) => {
    try {
        const product = productsRepo.getProductById(req.params.id);
        if (product) {


            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createProduct = (req, res) => {
    try {
        const { name, description, price, stock, category, status } = req.body;
        const id = productsRepo.createProduct({ name, description, price, stock, category, status });
        res.status(201).json({ id, name, description, price, stock, category, status });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateProduct = (req, res) => {
    try {
        const { name, description, price, stock, category, status } = req.body;
        const changes = productsRepo.updateProduct(req.params.id, { name, description, price, stock, category, status });
        if (changes) {
            res.json({ id: req.params.id, name, description, price, stock, category, status });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteProduct = (req, res) => {
    try {
        const changes = productsRepo.deleteProduct(req.params.id);
        if (changes) {
            res.json({ message: 'Product deleted' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getProductCategories = (req, res) => {
    try {
        const result = productsRepo.getProductCategoriesRepo();
        const categories = result.map(row => row.category);

        res.json({ categories });
    } catch (error) {
        console.error('Error fetching product categories:', error);
        res.status(500).json({ error: error.message });
    }
};
