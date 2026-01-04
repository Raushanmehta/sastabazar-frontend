
import { Box, Button, FormControlLabel, Modal, Radio, RadioGroup } from '@mui/material'
import { useState } from 'react';
import AddressCard from './AddressCard';
import AddressForm from './AddressForm';
import PricingCart from '../cart/PricingCart';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,

};

const paymentGatwayList = () => [
    {
        value: "RAZORPAY",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg",
        lable: "Razorpay"
    },
    {
        value: "STRIPE",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png",
        lable: "Stripe"
    }
]




const Checkout = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [paymentGateway, setPaymentGateway] = useState("RAZORPAY");

    const handlePaymentChange = (event) => {
        setPaymentGateway(event.target.value);
    }


    return (
        <>
            <div className='pt-10 px-5 sm:px-10 md:px-44 lg:px-60 min-h-screen'>

                <div className='space-y-5 lg:space-y-50 lg:grid lg:grid-cols-3 lg:gap-9'>

                    <div className='col-span-2  space-y-5'>

                        <div className='flex justify-between items-center'>

                            <h1 className='font-semibold'>Select Delivery Address</h1>
                            <Button onClick={handleOpen}>
                                Add New Address
                            </Button>

                        </div>

                        <div className=' text-xs font-medium space-y-5  rounded-md'>

                            <p>Save Address</p>
                            <div className='space-y-3'>
                                {[1].map((item) => (
                                    <AddressCard />
                                ))}
                            </div>

                        </div>

                        <div className='py-4 px-5 rounded-md border border-gray-200'>
                            <Button onClick={handleOpen}>
                                Add New Address
                            </Button>
                        </div>

                    </div>

                    <div className='space-y-2'>

                        <div className="border border-gray-200 p-2">
                            <h1 className="flex justify-center text-cyan-500 font-medium text-sm py-2">
                                Select Payment Gateway
                            </h1>

                            <RadioGroup
                                row
                                name="radio-buttons-group"
                                className="flex gap-3"
                                onChange={handlePaymentChange}
                                value={paymentGateway}
                            >
                                {paymentGatwayList().map((item) => (
                                    <FormControlLabel
                                        key={item.value}
                                        value={item.value}
                                        control={<Radio />}
                                        className="border rounded-md border-gray-200 w-[48%] m-0 px-2 py-1"
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            margin: 0,
                                        }}
                                        label={
                                            <img
                                                src={item.image}
                                                alt={item.label}
                                                className={item.value === "RAZORPAY" ? "w-20" : "w-12"}
                                            />
                                        }
                                    />
                                ))}
                            </RadioGroup>
                        </div>


                        <div className='border border-gray-200  rounded-b-md'>

                            <PricingCart />
                            <div className='p-5 '>
                                <Button variant='contained' sx={{ width: "100%" }} size='large'>
                                    Checkout
                                </Button>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={style}>
                    <AddressForm />
                </Box>
            </Modal>

        </>
    )
}

export default Checkout