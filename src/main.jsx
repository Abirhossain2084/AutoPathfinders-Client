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
import BrandProduct from './Componenets/BrandProduct/BrandProduct';
import ProductDetails from './Componenets/ProductDetails/ProductDetails';
import Error from './Componenets/Error/Error';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children: [
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/addedproduct",
        element:<AddedProduct></AddedProduct>,
        loader: () =>fetch('https://autopathfinder-server-arqtj2hvl-md-abir-hossains-projects.vercel.app/product')
      },
      {
        path:"/product/:name",
        element:<BrandProduct></BrandProduct>,
        loader: ({params}) => fetch(`https://autopathfinder-server-arqtj2hvl-md-abir-hossains-projects.vercel.app/product/${params.name}`)
        
      },
      {
        path:"/details/id/:id",
        element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://autopathfinder-server-arqtj2hvl-md-abir-hossains-projects.vercel.app/product/id/${params.id}`)
        
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
        path:"/updateproduct/id/:id",
        element:<PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({params}) => fetch(`https://autopathfinder-server-arqtj2hvl-md-abir-hossains-projects.vercel.app/product/id/${params.id}`)
        
      
      },
      {
        path:"/mycart",
        element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: () => fetch(`https://autopathfinder-server-arqtj2hvl-md-abir-hossains-projects.vercel.app/cartproduct/add-to-cart`)
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
