import { ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

import customTheme from './theme/customTheme.js';

import Home from './customer/pages/home/Home.jsx';
import Product from './customer/pages/product/Product.jsx';
import ProductDetails from './customer/pages/productDetails/ProductDetails.jsx';
import Review from './customer/pages/review/review.jsx';
import Cart from './customer/pages/cart/Cart.jsx';
import Checkout from './customer/pages/checkout/Checkout.jsx';
import Account from './customer/pages/account/Account.jsx';

import SellerDashboard from './seller/dashboard/SellerDashboard.jsx';
import AdminDashboard from './admin/pages/dashboard/AdminDashboard.jsx';

import { fetchProduct } from './state/fetchProduct.js';
import SellerLayout from './layout/SellerLayout.jsx';
import CustomerLayout from './layout/CustomerLayout.jsx';
import SellerLogin from './seller/pages/SellerLogin.jsx';

import Products from './seller/pages/products/Products.jsx';
import Orders from './seller/pages/orders/Orders.jsx';
import AddProducts from './seller/pages/products/AddProducts.jsx';
import Payment from './seller/pages/payment/Payment.jsx';
import Transaction from './seller/pages/payment/Transaction.jsx';
import Profile from './seller/pages/account/Profile.jsx';
import AdminLayout from './layout/AdminLayout.jsx';
import SellersTable from './admin/pages/sellers/SellersTable.jsx';
import Coupon from './admin/pages/coupon/Coupon.jsx';
import AddCouponForm from './admin/pages/coupon/AddCouponForm.jsx';
import SliderTable from './admin/pages/homePage/SliderTable.jsx';
import ElectronicTable from './admin/pages/homePage/ElectronicTable.jsx';
import ShopByCategoryTable from './admin/pages/homePage/ShopByCategoryTable.jsx';
import Deal from './admin/pages/homePage/deal/Deal.jsx';
import Accounts from './admin/pages/account/Account.jsx';



function App() {
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <ThemeProvider theme={customTheme}>
      <Routes>
        <Route element={<CustomerLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<Product />} />
          <Route path="/reviews/:productId" element={<Review />} />
          <Route path="/product-details/:categoryId/:name/:productId"
            element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account/*" element={<Account />} />
        </Route>

// ----------------seller Routing--------------------//
        <Route path="/seller/login" element={<SellerLogin />} />

        <Route element={<SellerLayout />}>
          <Route path="/seller/dashboard*" element={<SellerDashboard />} />
          <Route path='/seller/orders/*' element={<Orders />} />
          <Route path="/seller/products/*" element={<Products />} />
          <Route path='/seller/add-product/*' element={<AddProducts />} />
          <Route path='/seller/payment/*' element={<Payment />} />
          <Route path='/seller/transaction/*' element={<Transaction />} />
          <Route path='/seller/account/*' element={<Profile />} />
        </Route>


        //---------------------admin routing ---------------------//
        <Route element={<AdminLayout />}>
            <Route path='/admin/dashboard/*' element={<AdminDashboard/>} />
            <Route path='/admin/sellers/*' element={<SellersTable/>} />
            <Route path='/admin/coupon/*' element={<Coupon/>} />
            <Route path='/admin/add-coupon/*' element={<AddCouponForm/>} />
            <Route path='/admin/home-slider/*' element={<SliderTable/>} />
            <Route path='/admin/electronics-category/*' element={<ElectronicTable/>} />
            <Route path='/admin/shop-by-category/*' element={<ShopByCategoryTable/>} />
            <Route path='/admin/deals/*'element={<Deal/>} />

            <Route path='/admin/account/*' element={<Accounts/>} />
            <Route path='/admin/logout/*' element={'<Logout/>'} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
