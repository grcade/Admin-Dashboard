import {configureStore } from "@reduxjs/toolkit"
import  dashboardReducer  from "./features/dashboardSlice";
import productReducer from "./features/productSlice";
import salesReducer from "./features/salesSlice";
import customerReducer from "./features/customerSlice";
import { dashboardApi } from "./dashboardApi";

const store = configureStore({
    reducer: {
        dashboard: dashboardReducer,
        product: productReducer,
        sales: salesReducer,
        customer: customerReducer,
        [dashboardApi.reducerPath]: dashboardApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(dashboardApi.middleware),
})


export default store;
