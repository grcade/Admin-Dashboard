import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  Container  from './components/container/Container'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Dashboard, Products,  Customer, Sales } from "./pages/index";
import { Provider} from "react-redux"
import store from "./store/store";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Container/>,
        children: [
            {
                path: "/",
                element: <Dashboard/>
            },
            {
                path: "/products",
                element: <Products/>
            },
            {
                path: "/customer",
                element: <Customer/>
            },
            {
                path: "/sales",
                element: <Sales/>
            },
        ]
    }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>


  </StrictMode>,
)
