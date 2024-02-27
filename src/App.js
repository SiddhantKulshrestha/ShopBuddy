import React from 'react'
import Product from './components/Product'
import "bootstrap/dist/css/bootstrap.min.css"
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Cart from './components/Cart'
import RootLayout from './components/RootLayout'
import "../src/App.css"

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path = "/" element = {<RootLayout />} >
      <Route index element ={ <Dashboard />} ></Route>
      <Route path="/cart" element ={ <Cart />} ></Route>
      </Route>
  ))
  return (
    <div className='App' >
      <RouterProvider router = {router} />
      <Product />
    </div>
  )
}

export default App

