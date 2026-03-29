import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customers:
  [
    {
      "Name": "John Doe",
      "Email": "john.doe@example.com",
      "TotalOrders": 15,
      "TotalSpent": 1200.50,
      "JoinDate": "2022-05-15",
      "Address": {
        "Street": "123 Elm Street",
        "City": "Springfield",
        "State": "IL",
        "ZipCode": "62704",
        "Country": "USA"
      }
    },
    {
      "Name": "Jane Smith",
      "Email": "jane.smith@example.com",
      "TotalOrders": 8,
      "TotalSpent": 540.75,
      "JoinDate": "2023-01-10",
      "Address": {
        "Street": "456 Oak Avenue",
        "City": "Denver",
        "State": "CO",
        "ZipCode": "80203",
        "Country": "USA"
      }
    },
    {
      "Name": "Michael Brown",
      "Email": "michael.brown@example.com",
      "TotalOrders": 25,
      "TotalSpent": 1890.00,
      "JoinDate": "2021-08-20",
      "Address": {
        "Street": "789 Maple Lane",
        "City": "Austin",
        "State": "TX",
        "ZipCode": "73301",
        "Country": "USA"
      }
    },
    {
      "Name": "Emily Davis",
      "Email": "emily.davis@example.com",
      "TotalOrders": 12,
      "TotalSpent": 760.30,
      "JoinDate": "2022-11-05",
      "Address": {
        "Street": "101 Pine Road",
        "City": "Seattle",
        "State": "WA",
        "ZipCode": "98101",
        "Country": "USA"
      }
    },
    {
      "Name": "Chris Wilson",
      "Email": "chris.wilson@example.com",
      "TotalOrders": 5,
      "TotalSpent": 320.00,
      "JoinDate": "2023-03-18",
      "Address": {
        "Street": "202 Birch Boulevard",
        "City": "Orlando",
        "State": "FL",
        "ZipCode": "32801",
        "Country": "USA"
      }
    }
  ] ,
  loading: false,
  error: null,
  searchResult: [],

};



const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {

        setLoading: (state) =>  state.loading = !state.loading,
        searchCustomers: (state, action) => {


            const {Name = '', Email = ''}= action.payload

            state.searchResult = state.customers.filter((customer) => customer.Name.toLowerCase().includes( Name.toLowerCase()) || customer.Email.toLowerCase().includes(Email.toLowerCase())
        )
          },

         resetSearch: (state) => state.searchResult = [],
    }
})



export const { searchCustomers, resetSearch, setLoading} = customerSlice.actions

export default customerSlice.reducer;
