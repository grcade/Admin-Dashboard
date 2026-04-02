import * as dashboardRepo from '../Repo/dashboard.repo.js';

export const getStats = (req, res) => {
    try {
        const stats = dashboardRepo.getDashboardStats();
        res.json(stats);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getMonthlySales = (req, res) => {
    try {
        const sales = dashboardRepo.getMonthlySales();
        res.json(sales);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
