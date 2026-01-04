import { Box, Button, Divider,  } from '@mui/material'

import { useNavigate } from 'react-router-dom'
import OrderStepper from './OrderStepper';

const OrderDetails = () => {
    const navigate = useNavigate();
    return (
        <Box className='space-y-5'>
            <section className='flex flex-col gap-5 justify-center items-center'>
                <img
                    src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSTVLrGDLC9U53qOyzziJ0umStK2dIPjrx_aYsplueQrJLqQ1uuwYRzfgW-6K_AMnhBn72fOx9qyHmNZ4ND5NR3rckNTSpJwdS1KB3lZA7-ORs03o-HuorFJg"
                    alt=""
                    className='w-[70px]'
                />
                <div className='text-sm space-y-1 text-center'>
                    <h1 className='font-bold'>EY Communication</h1>
                    <p className='text-gray-500'>Apple Watch Series 11 GPS + Cellular 46mm Aluminium Case Sport Band</p>
                    <p><strong>size : </strong>M</p>
                </div>

                <div>
                    <Button onClick={() => navigate(`/reviews/${5}/create`)}>
                        Write a Review
                    </Button>
                </div>
            </section>

            <section className='border border-gray-200 p-5'>
            <OrderStepper orderStatus={"CANCELLED"} />
            </section>

            <div className='border border-gray-200 p-5'>
                <h1 className='font-bold pb-3'>Delivery Address</h1>
                <div className='text-sm space-y-2' >
                    <div className='flex gap-2  font-medium' >
                        <p>{"Sastabazar"}</p>
                        <Divider  flexItem orientation="vertical"/>
                        <p>{62956484441}</p>
                    </div>


                    <p>
                        {"Bonker Clothing"},{"62956484441"},{"Bonker Clothing"},{"62956484441"},{"Bonker Clothing"},{"62956484441"},
                    </p>
                </div>
            </div>

            <div className=' border border-gray-200 space-y-4'>
                <div className='flex justify-between text-sm pt-5 px-5' >
                    <p className='font-bold'>Total Item Price</p>
                    <p>Your saved <span className='text-green-500 font-medium text-sm'>₹ 999.00</span>on this item</p>

                </div>
                <p className='font-medium'> 999.00</p>

            </div>

        </Box>
    )
}

export default OrderDetails