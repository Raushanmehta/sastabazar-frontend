import React from 'react'
import { Route, Routes } from 'react-router-dom'

import SellerTable from '../admin/pages/sellers/SellersTable'
import Coupon from '../admin/pages/coupon/Coupon'
import Account from '../admin/pages/account/Account'
import AddCouponForm from '../admin/pages/coupon/AddCouponForm'
import ElectronicTable from '../admin/pages/homePage/ElectronicTable'
import ShopByCategoryTable from '../admin/pages/homePage/ShopByCategoryTable'
import DealTable from '../admin/pages/homePage/DealTable'
import SliderTable from '../admin/pages/homePage/SliderTable'

const AdminRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<SellerTable/>} />
            <Route path='/coupon' element={<Coupon/>} />
            <Route path='add-coupon' element={<AddCouponForm/>} />
            <Route path='home-slider' element={<SliderTable/>} />
            <Route path='electronics-category' element={<ElectronicTable/>} />
            <Route path='shop-by-category' element={<ShopByCategoryTable/>} />
            <Route path='deals'element={<DealTable/>} />

            <Route path='account' element={<Account/>} />
            <Route path='logout' element={'<Logout/>'} />
        </Routes>
    </div>
  )
}

export default AdminRoutes