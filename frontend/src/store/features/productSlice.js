import { createSlice } from "@reduxjs/toolkit";



const initialState = {

    products: [
        {
            id: 1,
            name: "Product 1",
            price: 59.99,
            stock: 30,
            category: "T-shirts",
            status: "In Stock"
        },
        {
            id: 2,
            name: "Product 2",
            price: 99.99,
            stock: 50,
            category: "Jeans",
            status: "In Stock"
        },
        {
            id: 3,
            name: "Product 3",
            price: 199.99,
            stock: 20,
            category: "Jacket",
            status: "In Stock"
        },
        {
            id: 4,
            name: "Product 4",
            price: 119.99,
            stock: 20,
            category: "Sweatshirts",
            status: "In Stock"
        },
        {
            id: 5,
            name: "Product 4",
            price: 99.99,
            stock: 50,
            category: "Shoes",
            status: "In Stock"
        },
    ],
    filteredProducts: [],
    loading: false,
    error: null,
    filters: {
        category: 'all',
        status: 'all'
    }
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {



        addProduct: ( state, action) => {

            state.products.push( action.payload)
        },

        deleteProduct: (state, action) => {
            try {
                state.error = ""
                state.products=  state.products.filter((product) => (
                    product.id !== action.payload  ))
            } catch (error) {
                state.error = error.message;

            }
        },

        updateProduct: (state, action) => {
            state.products = state.products.map((product) =>
                product.id === action.payload.id
                    ? { ...product, ...action.payload.updates }
                    : product
            );
        },

        updateFilters: (state, action) => {

            state.filters = { ...state.filters, ...action.payload }

        },



        setFilters: (state) => {

            console.log("Filters Applied:", state.filters);
            console.log("Products Before Filter:", state.products);
            state.filteredProducts = [];
            state.filteredProducts = state.products.filter(
                (product) =>
                    (state.filters.category === "all" || product.category === state.filters.category) &&
                    (state.filters.status === "all" || product.status === state.filters.status)
            );

        },

    }


})


export const { setFilters, updateProduct, updateFilters, deleteProduct, addProduct} = productSlice.actions

export default productSlice.reducer;
