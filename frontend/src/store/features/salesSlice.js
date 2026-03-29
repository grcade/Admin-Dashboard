import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders:
    [
      {
        id: "ORD001",
        customerName: "Shel Dowgill",
        date: "11/10/2024",
        total: "312.47",
        status: "Processing",
        items: [
          { productId: 32, quantity: 9, price: "Lek" },
          { productId: 98, quantity: 7, price: "Peso" },
          { productId: 73, quantity: 4, price: "Euro" },
          { productId: 2, quantity: 5, price: "Dinar" },
          { productId: 13, quantity: 10, price: "Euro" },
          { productId: 63, quantity: 10, price: "Peso" },
        ],
        shippingAddress: { street: "75 Mariners Cove Plaza", city: "Tazouta" },
      },
      {
        id: "ORD002",
        customerName: "Heddi Scollick",
        date: "9/26/2024",
        total: "399.99",
        status: "Delivered",
        items: [
          { productId: 60, quantity: 10, price: "Dinar" },
          { productId: 75, quantity: 1, price: "Yuan Renminbi" },
          { productId: 74, quantity: 8, price: "Zloty" },
          { productId: 51, quantity: 7, price: "Peso" },
        ],
        shippingAddress: { street: "908 Lunder Junction", city: "Datian" },
      },
      {
        id: "ORD003",
        customerName: "Isa Gorrie",
        date: "1/29/2024",
        total: "112.47",
        status: "Pending",
        items: [
          { productId: 54, quantity: 8, price: "Peso" },
          { productId: 20, quantity: 7, price: "Rand" },
          { productId: 93, quantity: 9, price: "Quetzal" },
        ],
        shippingAddress: { street: "14 Elgar Terrace", city: "Mingshan" },
      },
      {
        id: "ORD004",
        customerName: "Peggy Masden",
        date: "12/23/2024",
        total: "99.99",
        status: "Delivered",
        items: [
          { productId: 94, quantity: 5, price: "Euro" },
          { productId: 21, quantity: 8, price: "Euro" },
          { productId: 49, quantity: 4, price: "Dollar" },
          { productId: 42, quantity: 7, price: "Zloty" },
          { productId: 95, quantity: 1, price: "Euro" },
          { productId: 10, quantity: 8, price: "Won" },
          { productId: 91, quantity: 7, price: "Rial" },
          { productId: 61, quantity: 10, price: "Bolivar" },
        ],
        shippingAddress: { street: "9 Sunbrook Road", city: "Darungan Lor" },
      },
      {
        id: "ORD005",
        customerName: "Colman Hinstock",
        date: "12/16/2024",
        total: "150",
        status: "Delivered",
        items: [
          { productId: 67, quantity: 9, price: "Zloty" },
          { productId: 60, quantity: 9, price: "Dollar" },
        ],
        shippingAddress: { street: "7458 Westerfield Hill", city: "Bender" },
      },
      {
        id: "ORD006",
        customerName: "Jo-anne Gutowski",
        date: "8/11/2024",
        total: "199.99",
        status: "Shipped",
        items: [
          { productId: 1, quantity: 7, price: "Baht" },
          { productId: 70, quantity: 3, price: "Rial" },
          { productId: 93, quantity: 9, price: "Peso" },
          { productId: 62, quantity: 7, price: "Ringgit" },
          { productId: 77, quantity: 9, price: "Yen" },
          { productId: 44, quantity: 3, price: "Rupiah" },
          { productId: 9, quantity: 3, price: "Real" },
          { productId: 57, quantity: 5, price: "Dollar" },
          { productId: 9, quantity: 5, price: "Tugrik" },
        ],
        shippingAddress: { street: "79 Colorado Terrace", city: "Kusheriki" },
      },
      {
        id: "ORD007",
        customerName: "Cristian Gerrett",
        date: "12/9/2024",
        total: "99.99",
        status: "Delivered",
        items: [
          { productId: 8, quantity: 5, price: "Yen" },
          { productId: 67, quantity: 5, price: "Baht" },
          { productId: 91, quantity: 8, price: "Dirham" },
        ],
        shippingAddress: { street: "85105 Maywood Road", city: "Qiankeng" },
      },
      {
        id: "ORD008",
        customerName: "Nevil Reditt",
        date: "3/3/2024",
        total: "299",
        status: "Delivered",
        items: [
          { productId: 58, quantity: 9, price: "Yen" },
          { productId: 10, quantity: 5, price: "Bolivar" },
          { productId: 62, quantity: 3, price: "Euro" },
          { productId: 18, quantity: 9, price: "Yuan Renminbi" },
          { productId: 70, quantity: 5, price: "Yuan Renminbi" },
        ],
        shippingAddress: { street: "2965 Hintze Hill", city: "Purral" },
      },
      {
        id: "ORD009",
        customerName: "Paul Thorsen",
        date: "7/22/2024",
        total: "500",
        status: "Pending",
        items: [
          { productId: 52, quantity: 6, price: "Krona" },
          { productId: 55, quantity: 1, price: "Euro" },
        ],
        shippingAddress: { street: "8 Oxford Crossing", city: "Cemara" },
      },
      {
        id: "ORD010",
        customerName: "Weylin Cullimore",
        date: "11/21/2024",
        total: "299.99",
        status: "Processing",
        items: [
          { productId: 43, quantity: 5, price: "Peso" },
          { productId: 68, quantity: 9, price: "Real" },
        ],
        shippingAddress: { street: "8 Fallview Road", city: "Nice" },
      },
      {
        id: "ORD011",
        customerName: "Mirna Quin",
        date: "3/5/2024",
        total: "150",
        status: "Delivered",
        items: [{ productId: 55, quantity: 1, price: "Rial" }],
        shippingAddress: { street: "93 Vernon Alley", city: "Le Port" },
      },
      {
        id: "ORD012",
        customerName: "Ailis Romagosa",
        date: "6/11/2024",
        total: "89",
        status: "Delivered",
        items: [{ productId: 97, quantity: 6, price: "Pound" }],
        shippingAddress: { street: "10334 Arkansas Point", city: "Būrabay" },
      },
      {
        id: "ORD013",
        customerName: "Merrill Remirez",
        date: "7/28/2024",
        total: "Yuan Renminbi",
        status: "Processing",
        items: [
          { productId: 62, quantity: 2, price: "Dinar" },
          { productId: 28, quantity: 9, price: "Kip" },
          { productId: 90, quantity: 5, price: "Peso" },
          { productId: 76, quantity: 6, price: "Yuan Renminbi" },
          { productId: 69, quantity: 10, price: "Zloty" },
          { productId: 76, quantity: 10, price: "Yuan Renminbi" },
          { productId: 42, quantity: 4, price: "Rupiah" },
          { productId: 85, quantity: 3, price: "Ruble" },
          { productId: 75, quantity: 9, price: "Dirham" },
        ],
        shippingAddress: { street: "1810 American Park", city: "Bahaodi" },
      },
      {
        id: "ORD014",
        customerName: "Ilaire Tittershill",
        date: "10/31/2024",
        total: "Yuan Renminbi",
        status: "Processing",
        items: [{ productId: 87, quantity: 10, price: "Yuan Renminbi" }],
        shippingAddress: { street: "96234 Esker Terrace", city: "Haixing" },
      },
      {
        id: "ORD015",
        customerName: "Gerek Sturrock",
        date: "9/3/2024",
        total: "Yuan Renminbi",
        status: "Pending",
        items: [
          { productId: 17, quantity: 1, price: "Franc" },
          { productId: 53, quantity: 6, price: "Real" },
          { productId: 59, quantity: 5, price: "Dollar" },
          { productId: 1, quantity: 10, price: "Yuan Renminbi" },
          { productId: 36, quantity: 5, price: "Dinar" },
          { productId: 32, quantity: 1, price: "Euro" },
          { productId: 46, quantity: 5, price: "Rupiah" },
          { productId: 37, quantity: 2, price: "Franc" },
          { productId: 43, quantity: 9, price: "Peso" },
          { productId: 46, quantity: 1, price: "Ruble" },
        ],
        shippingAddress: { street: "99490 Victoria Lane", city: "Gaoleshan" },
      },
      {
        id: "ORD016",
        customerName: "Perceval Backsal",
        date: "4/5/2024",
        total: "Rupee",
        status: "Delivered",
        items: [
          { productId: 29, quantity: 5, price: "Rupiah" },
          { productId: 96, quantity: 8, price: "Shilling" },
          { productId: 94, quantity: 7, price: "Peso" },
        ],
        shippingAddress: { street: "173 Donald Circle", city: "Kohāt" },
      },
      {
        id: "ORD017",
        customerName: "Craig Winthrop",
        date: "1/18/2024",
        total: "Yuan Renminbi",
        status: "Processing",
        items: [
          { productId: 3, quantity: 8, price: "Peso" },
          { productId: 71, quantity: 4, price: "Euro" },
          { productId: 11, quantity: 8, price: "Real" },
          { productId: 70, quantity: 2, price: "Yuan Renminbi" },
          { productId: 53, quantity: 10, price: "Real" },
          { productId: 24, quantity: 4, price: "Manat" },
          { productId: 10, quantity: 2, price: "Ruble" },
          { productId: 35, quantity: 7, price: "Rupiah" },
          { productId: 100, quantity: 7, price: "Zloty" },
          { productId: 21, quantity: 2, price: "Yuan Renminbi" },
        ],
        shippingAddress: {
          street: "5554 Shoshone Street",
          city: "Huaiyuan Chengguanzhen",
        },
      },
      {
        id: "ORD018",
        customerName: "Aidan Napleton",
        date: "4/7/2024",
        total: "Ruble",
        status: "Delivered",
        items: [
          { productId: 15, quantity: 6, price: "Ruble" },
          { productId: 94, quantity: 7, price: "Ruble" },
          { productId: 25, quantity: 7, price: "Ruble" },
          { productId: 41, quantity: 5, price: "Dollar" },
          { productId: 67, quantity: 9, price: "Peso" },
          { productId: 91, quantity: 1, price: "Euro" },
          { productId: 36, quantity: 1, price: "Peso" },
          { productId: 38, quantity: 5, price: "Rupiah" },
        ],
        shippingAddress: { street: "13 Maywood Drive", city: "Selishche" },
      },
      {
        id: "ORD019",
        customerName: "Hamid Fairbrass",
        date: "3/5/2024",
        total: "Dinar",
        status: "Pending",
        items: [
          { productId: 55, quantity: 6, price: "Euro" },
          { productId: 95, quantity: 8, price: "Ruble" },
          { productId: 97, quantity: 10, price: "Guarani" },
          { productId: 6, quantity: 6, price: "Euro" },
          { productId: 4, quantity: 3, price: "Ruble" },
          { productId: 72, quantity: 8, price: "Yen" },
          { productId: 25, quantity: 4, price: "Yuan Renminbi" },
        ],
        shippingAddress: { street: "5 Mccormick Center", city: "Farkaždin" },
      },
      {
        id: "ORD020",
        customerName: "Aldridge Niessen",
        date: "5/19/2024",
        total: "Shilling",
        status: "Shipped",
        items: [],
        shippingAddress: { street: "583 Hansons Court", city: "Mlowo" },
      },
    ],
};



const salesSlice = createSlice({
    name: "sales",
    initialState,
    reducers: {
        updateStatus: (state, action) => {
            const { id, status } = action.payload;


            const order = state.orders.find((order) => order.id === id);
            if (order) {
              order.status = status;
            }
          }
    }
})



export const {updateStatus} = salesSlice.actions

export default salesSlice.reducer;
