import { Box, Button, Divider, } from '@mui/material'
import PaymentsIcon from '@mui/icons-material/Payments';


import { useNavigate } from 'react-router-dom'
import OrderStepper from './OrderStepper';

const OrderDetails = () => {
    const navigate = useNavigate();

    const cancel = false;


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
                <OrderStepper orderStatus={"DELIVERED"} />
            </section>

            <div className='border border-gray-200 p-5'>
                <h1 className='font-bold pb-3'>Delivery Address</h1>
                <div className='text-sm space-y-2' >
                    <div className='flex gap-2  font-medium' >
                        <p>{"Sastabazar"}</p>
                        <Divider flexItem orientation="vertical" />
                        <p>{62956484441}</p>
                    </div>
                    <p className='text-gray-500 font-medium'>
                        {"Bonker Clothing"}, {"62956484441"}, {"Bonker Clothing"}, {"62956484441"}, {"Bonker Clothing"}, {"62956484441"},
                    </p>
                </div>
            </div>

            <div className="border border-gray-200 space-y-4 p-5">
               
                <div className="flex justify-between items-center ">
                    <p className="font-bold">Total Item Price</p>
                    <p className="font-medium text-lg">₹ 999.00</p>
                </div>

                <p className=''>
                    You saved{' '}
                    <span className="text-green-500 font-normal">₹ 999.00</span>{' '}
                    on this item
                </p>
    
                <div className="bg-cyan-100 px-4 py-2 text-xs font-medium flex items-center gap-3 ">
                    <PaymentsIcon fontSize="small" />
                    <p>Pay on Delivery</p>
                </div>
            </div>

            <Divider />

            <div className='px-5 py-5'>
                <p className='text-xs'><strong>Sold by : </strong>{"Natural Lifestyle Product Private Limited"}</p>
            </div>

            <div className='py-10'>
                <Button
                    disabled={false}
                    // onClick={handleCancelOrder}
                    color='error' sx={{ py: "0.7rem" }}

                    className=''
                    variant='outlined'
                    fullWidth
                >
                    {cancel ? 'Order Cancelled' : 'Cancel Order'}
                </Button>

            </div>

        </Box>
    )
}

export default OrderDetails