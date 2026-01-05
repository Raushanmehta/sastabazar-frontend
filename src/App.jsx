import { ThemeProvider } from '@mui/material'

import customTheme from './theme/customTheme.js'
import Home from './customer/pages/home/Home.jsx'
import Navbar from './customer/components/navbar/Navbar.jsx'
import Product from './customer/pages/product/Product.jsx'
import ProductDetails from './customer/pages/productDetails/ProductDetails.jsx'
import Review from './customer/pages/review/review.jsx'
import Cart from './customer/pages/cart/Cart.jsx'
import Checkout from './customer/pages/checkout/Checkout.jsx'
import Account from './customer/pages/account/Account.jsx'
import { Route, Routes } from 'react-router-dom'
import Seller from './seller/pages/Seller.jsx'

function App() {
 
  return (
    <ThemeProvider theme={customTheme}>
     <div>
     <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<Product />} />
        <Route path="/reviews/:productId" element={<Review />} />
        <Route path="/product-details/:categoryId/:name/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account/*" element={<Account />} />
        <Route path="/seller/*" element={<Seller/>} />
      </Routes>

     </div>
    </ThemeProvider>

  )
}

export default App
