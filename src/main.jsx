import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Componenets/Root/Root';
import Home from './Componenets/Home/Home';
import Login from './Componenets/Login/Login';
import Register from './Componenets/Register/Register';
import AddProduct from './Componenets/AddProduct/AddProduct';
import MyCart from './Componenets/MyCart/MyCart';
import AuthProvider from './Providers/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import UpdateProduct from './Componenets/UpdateProduct/UpdateProduct';
import AddedProduct from './Componenets/AddedProductlist/AddedProduct';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/addedproduct",
        element:<AddedProduct></AddedProduct>,
        loader: () =>fetch('http://localhost:5000/product')
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/addproduct",
        element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path:"/updateproduct",
        element:<PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>
      },
      {
        path:"/mycart",
        element:<PrivateRoute><MyCart></MyCart></PrivateRoute>
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
