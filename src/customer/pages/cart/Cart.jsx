import React, { useState } from 'react'
import CartItem from './CartItem'
import { Close, Favorite, LocalOffer } from '@mui/icons-material'
import { cyan } from '@mui/material/colors'
import { Button, IconButton, TextField } from '@mui/material'
import PricingCart from './PricingCart'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const [couponCode, setCouponCode] = useState('');

  const navigate = useNavigate();
  const handleChange = (e) => {
    setCouponCode(e.target.value)
  }

  return (
    <div className='pt-10 px-5 sm:px-10 md:px-60 min-h-screen'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
        <div className='cartItemSection lg:col-span-2 space-y-2'>
          {[1,].map((item, index) => (
            <CartItem key={index} />
          ))}

        </div>

        <div className='col-span-1 text-sm space-y-3'>

          <div className='border border-gray-200 rounded-md p-4 space-y-5'>

            <div className='flex gap-3 text-sm items-center'>
              <div className='flex gap-3 text-sm items-center'>
                <LocalOffer sx={{ color: cyan[500], fontSize: "17px" }} />
              </div>
              <span>
                Apply Coupon
              </span>
            </div>

            {
              true ? <div className='flex justify-between items-center'>
                <TextField
                  onChange={handleChange}
                  id="outlined-basic"
                  label="Enter Coupon Code"

                  variant="outlined"
                  size='small'
                />
                <Button size='small' sx={{ height: "40px", width: "75px" }}>
                  Apply
                </Button>
              </div> :
                <div className='flex'>
                  <div className='p-1 pl-5 pr-3 border rounded-md flex gap-2 items-center'>
                    <span>SASTA30 Applied</span>
                    <IconButton>
                      <Close sx={{ color: cyan[500], fontSize: "17px" }} />
                    </IconButton>
                  </div>
                </div>
            }
          </div>

          <div className='border border-gray-200  rounded-b-md'>
            <PricingCart />

            <div className='p-5 '>
              <Button onClick={()=>navigate('/checkout')} variant='contained' sx={{ width: "100%" }} size='large'>
                Buy Now
              </Button>
            </div>

          </div>

          <div className='flex  justify-between gap-3 text-sm items-center border border-gray-200 rounded-md px-5 py-3'>
            <p className='text-gray-700 font-medium'>Add from wishlist </p>
            <IconButton>
              <Favorite sx={{ color: cyan[500], fontSize: "17px" }} />
            </IconButton>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart