import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dashboardApi = createApi({
    reducerPath: 'dashboardApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
    tagTypes: ['Customers', 'Products', 'Orders', 'Stats'],
    endpoints: (builder) => ({

        getCustomers: builder.query({
            query: ({ page = 1, limit = 10 }) => `customers?page=${page}&limit=${limit}`,
            providesTags: ['Customers'],
        }),
        getCustomerById: builder.query({
            query: (id) => `customers/${id}`,
            providesTags: (result, error, id) => [{ type: 'Customers', id }],
        }),


        getProducts: builder.query({
            query: ({ page = 1, limit = 10 }) => `products?page=${page}&limit=${limit}`,
            providesTags: ['Products'],
        }),
        createProduct: builder.mutation({
            query: (newProduct) => ({
                url: 'products',
                method: 'POST',
                body: newProduct,
            }),
            invalidatesTags: ['Products', 'Stats'],
        }),
        updateProduct: builder.mutation({
            query: ({ id, ...updates }) => ({
                url: `products/${id}`,
                method: 'PUT',
                body: updates,
            }),
            invalidatesTags: ['Products'],
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `products/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Products', 'Stats'],
        }),

        productCategories: builder.query({

            query: () => 'products/categories/all',

        }),

        // Orders
        getOrders: builder.query({
            query: ({ page = 1, limit = 10 }) => `orders?page=${page}&limit=${limit}`,
            providesTags: ['Orders'],
        }),
        updateOrderStatus: builder.mutation({
            query: ({ id, status }) => ({
                url: `orders/${id}`,
                method: 'PUT',
                body: { status },
            }),
            invalidatesTags: ['Orders', 'Stats'],
        }),

        // Dashboard
        getStats: builder.query({
            query: () => 'dashboard/stats',
            providesTags: ['Stats'],
        }),
        getMonthlySales: builder.query({
            query: () => 'dashboard/sales',
            providesTags: ['Stats'],
        }),
    }),
});

export const {
    useGetCustomersQuery,
    useGetCustomerByIdQuery,
    useGetProductsQuery,
    useCreateProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation,
    useProductCategoriesQuery,
    useGetOrdersQuery,
    useUpdateOrderStatusMutation,
    useGetStatsQuery,
    useGetMonthlySalesQuery,
} = dashboardApi;
