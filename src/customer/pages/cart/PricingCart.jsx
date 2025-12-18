import { Divider } from "@mui/material"


const PricingCart = () => {
  return (
    <>
    <div className='space-y-3 p-5 font-medium text-gray-700'>

      <div className='flex justify-between items-center'>
        <span>Subtotal</span>
        <span>₹ 999</span>
      </div>

      <div className='flex justify-between items-center'>
        <span>Discount</span>
        <span>₹ 399</span>
      </div>

      <div className='flex justify-between items-center'>
        <span>Shipping</span>
        <span>₹ 39</span>
      </div>

      <div className='flex justify-between items-center'>
        <span>Platfrom Fee</span>
        <span className="text-cyan-500">Free</span>
      </div>
      
    </div>
    <Divider />
        <div className='flex justify-between items-center p-5 font-semibold text-cyan-500 text-lg'>
        <span >Total</span>
        <span>₹ 999</span>

      </div>
    
    </>
  )
}

export default PricingCart