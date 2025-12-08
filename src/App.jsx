import { ThemeProvider } from '@mui/material'

import customTheme from './theme/customTheme.js'
import Home from './customer/pages/home/Home.jsx'
import Navbar from './customer/components/navbar/Navbar.jsx'
import Product from './customer/pages/product/Product.jsx'
import ProductDetails from './customer/pages/productDetails/ProductDetails.jsx'
import Review from './customer/pages/review/review.jsx'
import Cart from './customer/pages/cart/Cart.jsx'

function App() {
 
  return (
    <ThemeProvider theme={customTheme}>
     <div>
     <Navbar />
     {/* <Home/> */}
     {/* <Product/> */}
     {/* <ProductDetails/> */}
     {/* <Review/> */}
     <Cart/>
     </div>
    </ThemeProvider>

  )
}

export default App
