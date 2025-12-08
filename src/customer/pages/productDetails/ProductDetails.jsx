import React, { useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import { Button, Divider } from '@mui/material';
import { cyan } from '@mui/material/colors';
import { Add, AddShoppingCart, FavoriteBorder, LocalShipping, Remove, Shield, Wallet, WorkspacePremium } from '@mui/icons-material';
import SimilerProduct from './SimilerProduct';
import ReviewCard from '../review/reviewCard';

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className='px-5 lg:px-20 pt-10'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>

        <section className='flex flex-col lg:flex-row gap-5'>
          <div className='w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-5 '>
            {[1, 1, 1, 1].map((item) =>
              <img
                src='https://helloedits.com/wp-content/uploads/2023/03/Use-Models-for-product-Photography.webp'
                className='lg:w-full w-[50%] rounded-md  cursor-pointer'
                alt=''
              />)}
          </div>

          <div className='w-full lg:w-[85%]'>
            <img
              src="https://helloedits.com/wp-content/uploads/2023/03/Use-Models-for-product-Photography.webp"
              alt=""
              className='w-full rounded-md  object-cover'
            />
          </div>

        </section>

        <section>
          <h1 className='text-lg font-bold text-cyan-500'>
            Bonker Clothing
          </h1>
          <p className='text-gray-500 font-semibold'>Women back shirt</p>
          <div className='flex justify-between items-center py-2 border border-gray-200 w-[180px] px-3 mt-5'>
            <div className='flex gap-1 items-center'>
              <span>4</span>
              <StarIcon sx={{ color: cyan[500], fontSize: "17px" }} />
            </div>
            <Divider orientation='vertical' flexItem />
            <span>
              234 Rating
            </span>
          </div>

          <div>
            <div className="price flex items-center gap-3 mt-5 tezt-2xl">
              <span className="front-sans text-black">
                ₹ 499
              </span>
              <span className="line-through text-gray-400">
                ₹ 999
              </span>
              <span className="text-cyan-400 font-semibold">
                60% Off
              </span>
            </div>
            <p className='text-gray-500 text-sm'>Include of all taxes. Free Shipping above ₹1500.</p>
          </div>

          <div className='mt-7 space-y-3 text-gray-500'>
            <div className='flex items-center gap-4 '>
              <Shield sx={{ color: cyan[500] }} />
              <p>Authentic & Quality Assured</p>
            </div>
            <div className='flex items-center gap-4'>
              <WorkspacePremium sx={{ color: cyan[500] }} />
              <p>100% momey back guarantee</p>
            </div>
            <div className='flex items-center gap-4'>
              <LocalShipping sx={{ color: cyan[500] }} />
              <p>Free Shipping & Returns</p>
            </div>
            <div className='flex items-center gap-4'>
              <Wallet sx={{ color: cyan[500] }} />
              <p>Pay on Delivery might be available</p>
            </div>
          </div>

          <div className='mt-7 space-y-2 '>
            <h1 className='text-gray-500'>
              QUANTITY
            </h1>
            <div className='flex iten-center gap-2 w-[140px] justify-between'>
              <Button disabled={quantity === 1} onClick={() => setQuantity(quantity - 1)}>
                <Remove />
              </Button>
              <span>
                {quantity}
              </span>
              <Button onClick={() => setQuantity(quantity + 1)}>
                <Add />
              </Button>
            </div>

          </div>

          <div className='mt-12 flex items-center gap-5'>
            <Button
              fullWidth
              variant="contained"
              startIcon={<AddShoppingCart />}
              sx={{ py: "1rem" }}
            >
              ADD TO CART
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<FavoriteBorder />}
              sx={{ py: "1rem" }}
            >
              Whishlist
            </Button>
          </div>

          <div className='text-gray-500  mt-5 space-y-2'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem sed consequatur
              doloremque ad praesentium nisi provident eos maxime cumque omnis!</p>
          </div>

          <div className='mt-12 space-y-5'>
              <ReviewCard/>
              <Divider/>
          </div>



        </section>

      </div>

      <div className='mt-20'>
        <h1 className='text-gray-700 text-lg font-semibold mt-5'>
          SIMILER PRODUCT
        </h1>
        <div className='my-5'>
          <SimilerProduct />
        </div>
      </div>

    </div>
  )
}

export default ProductDetails