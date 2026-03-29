import {configureStore } from "@reduxjs/toolkit"
import  dashboardReducer  from "./features/dashboardSlice";
import productReducer from "./features/productSlice";
import salesReducer from "./features/salesSlice";
import customerReducer from "./features/customerSlice";

const store = configureStore({
    reducer: {
        dashboard: dashboardReducer,
        product: productReducer,
        sales: salesReducer,
        customer: customerReducer,

    }

})


export default store;
