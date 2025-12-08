import React from 'react'
import ReviewCard from './reviewCard'
import { Divider, Typography } from '@mui/material'
import CalculateReviewCard from './CalculateReviewCard'

const Review = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-20 p-5 lg:px-20'>

      <section className='w-full md:w-1/2 lg:w-[30%] space-y-2 '>
        <img
          src="https://helloedits.com/wp-content/uploads/2023/03/Use-Models-for-product-Photography.webp"
          alt="revirw-product" />

        <div>
          <div>
            <p className='fornt-bold text-xl'>Bonker Clothing</p>
            <p className='text-lg text-gray-500'>Women T-Shirt</p>
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
          </div>
        </div>
      </section>

      <section className="w-full max-w-3xl mx-auto">
        
        <div className='pb-10'>
          <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
            Review & Ratings
          </Typography>
          <CalculateReviewCard />
        </div>

        {[1, 1, 1, 1].map((item, index) => (
          <div
            key={index}
            className=" px-3  "
          >
            <ReviewCard />
            <Divider className="!my-4" />
          </div>
        ))}
      </section>


    </div>
  )
}

export default Review