import React from 'react'
import ElectricCategory from './category/electricCategory/ElectricCategory'
import SliderCategory from './category/sliderCategory/SliderCategory'
import Deal from './deal/Deal'
import ShopByCategory from './category/shopByCategory/ShopByCategory'
import SellerBanner from './section/SellerBanner'

const Home = () => {
  return (
    <>
    <div className='space-y-5 lg:space-y-10 relative'>
        <SliderCategory/>
        <ElectricCategory/>
        <Deal/>
        <ShopByCategory/>
        <SellerBanner/>
    </div>
    </>
  )
}

export default Home