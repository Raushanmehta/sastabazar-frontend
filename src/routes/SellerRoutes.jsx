import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../seller/dashboard/Dashboard'
import Products from '../seller/pages/products/Products'
import AddProducts from '../seller/pages/products/AddProducts'
import Orders from '../seller/pages/orders/Orders'
import Profile from '../seller/pages/account/Profile'
import Transaction from '../seller/pages/payment/Transaction'
import Payment from '../seller/pages/payment/Payment'

const SellerRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Dashboard/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/add-product' element={<AddProducts/>} />
            <Route path='/orders' element={<Orders/>} />
            <Route path='/payment' element={<Payment/>} />
            <Route path='/transaction' element={<Transaction/>} />
            <Route path='/account' element={<Profile/>} />

        </Routes>
    </>
  )
}

export default SellerRoutes