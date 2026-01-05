import { Button, Step, StepLabel, Stepper } from '@mui/material'
import { useState } from 'react'

import { useFormik } from 'formik';
import SellerFormStep1 from '../form/SellerFormStep1';
import SellerFormStep2 from '../form/SellerFormStep2';
import SellerFormStep3 from '../form/SellerFormStep3';
import SellerFormStep4 from '../form/SellerFormStep4';

const steps = [
    "Tax Details & Mobile",
    "Pickup Address",
    "Bank Details",
    "Supplier Details"
]

const SellerAccountForm = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleStep = (value) => () => {
        (activeStep < steps.length - 1 || (activeStep > 0 && value == - 1)) && setActiveStep(activeStep + value);
        activeStep == steps.length - 1 && handleCreateAccount();
        console.log("activeStep", activeStep);
    }

    const handleCreateAccount = () => {
        console.log("Create Account");

    }


    const formik = useFormik({
        initialValues: {
            mobile: "",
            otp: "",
            gstin: "",
            pickupAddress: {
                name: "",
                mobile: "",
                pincode: "",
                address: "",
                locality: "",
                city: "",
                state: "",
            },
            bankDetails: {
                accountNumber: "",
                ifscCode: "",
                accountHolderName: "",
            },
            sellerName: "",
            email: "",
            businessDetails: {
                businessName: "",
                businessEmail: "",
                businessMobile: "",
                logo: "",
                banner: "",
                businessAddress: "",
            },
            password: "",

        },

        // validationSchema: AddressFormSchema,
        onSubmit: (values) => {
            console.log(values, "formik submit");
        },

    });



    return (
        <div>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((lable, index) => (
                    <Step key={lable}>
                        <StepLabel>{lable}</StepLabel>

                    </Step>
                ))}
            </Stepper>

            <section className='mt-10 space-y-10 max-w-3xl mx-auto'>

                <div className=''>
                    {
                        activeStep == 0 ? (<SellerFormStep1 formik={formik} />) :
                            activeStep == 1 ? (<SellerFormStep2 formik={formik} />) :
                                activeStep == 2 ? (<SellerFormStep3 formik={formik} />) :
                                    (<SellerFormStep4 formik={formik} />

                                    )}
                </div>


                <div className='flex items-center justify-between'>
                    <Button onClick={handleStep(-1)} variant='contained' disabled={activeStep === 0}>
                        Back
                    </Button>

                    <Button onClick={handleStep(1)} variant='contained'>
                        {activeStep == steps.length - 1 ? "Create Account" : "Continue"}
                    </Button>
                </div>
            </section>
        </div>
    )
}

export default SellerAccountForm