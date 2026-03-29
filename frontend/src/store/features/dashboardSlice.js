import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    totalRevenue: 124580,
    ordersCount: 45,
    productsCount: 120,
    activeCustomer: 89,
    revenueData: [
        { month: 'Jan', revenue: 10000 },
        { month: 'Feb', revenue: 25000 },
        { month: 'Mar', revenue: 10000 },
        { month: 'Apr', revenue: 12000 },
        { month: 'May', revenue: 11000 },
        { month: 'Jun', revenue: 19000 },
        { month: 'July', revenue: 25000 },

    ],
    recentOrders: [
        { id: 1, customer: 'John Doe', amount: 50, status: 'completed' },
        { id: 2, customer: 'Marshall', amount: 130, status: 'completed' },
        { id: 3, customer: 'Sundar', amount: 150, status: 'completed' },
        { id: 4, customer: 'Raghav', amount: 100, status: 'completed' },

    ]

}



const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers:{

        updateStats: (state, action) => {
            return {...state, ...action.payload}
        },

        incrementOrders: (state) => {
            state.ordersCount += 1
        },

        incrementRevenue: (state, action) => {
            state.totalRevenue += action.payload
        },


    }
})


export const {updateStats, incrementOrders, incrementRevenue} = dashboardSlice.actions

export default dashboardSlice.reducer
