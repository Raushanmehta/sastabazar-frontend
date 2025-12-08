import { Add, Close, Remove } from "@mui/icons-material"
import { Button, Divider, IconButton } from "@mui/material"


const CartItem = () => {
  
  const handleUpdateQuantity = () => {
    
  }
  
  return (
    <div className=' border border-gray-200 rounded-md relative'>
      <div className='p-5 flex gap-3'>

        <div>
          <img 
          className='w-[100px] rounded-md'
          src="https://www.bringitonline.in/uploads/2/2/4/5/22456530/creative-hanger-product-hanger-clothing-fashion-photography-delhi-ncr-mumbai-noida-gurgaon-india-new-images-1_orig.jpg" 
          alt="CartItem" 
          />
        </div>

        <div className="space-y-">
          <h1 className='font-semibold text-gray-800 text-lg'>Product Name</h1>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet.</p>
          <p className="text-gray-500"><strong>Sold by: </strong> Natural Lifestyle Product Private Limited</p>
          <p>7 days replacement available</p>
          <p className="text-gray-700"><strong>Quantity : </strong> {5}</p>
        </div>

      </div>
      <Divider/>
      <div className="flex justify-between items-center p-2">
         <div className='items-center space-y-2 '>
            <div className='flex iten-center gap-2 w-[140px] justify-between'>
              <Button onClick={handleUpdateQuantity} disabled={true}>
                <Remove />
              </Button>
              <span>
                {5}
              </span>
              <Button onClick={handleUpdateQuantity}>
                <Add />
              </Button>
            </div>
         </div>
         <div className="flex ">
          <h1 className="font-bold text-lg text-gray-500">₹ 499</h1>
         </div>
      </div>
      <div className="absolute top-1 right-1">
        <IconButton>
          <Close/>
        </IconButton>
      </div>
    </div>
  )
}

export default CartItem