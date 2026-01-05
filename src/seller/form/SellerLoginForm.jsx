import { TextField } from '@mui/material'
import { useFormik } from 'formik'
import { useState } from 'react'

const SellerLoginForm = () => {

    const [showOtp, setShowOtp] = useState(true);
    const formik = useFormik({

        initialValues: {
            email: "",
            otp: "",
        },
        onSubmit: (values) => {
            console.log('form data', values);
        }
    });


    return (
        <div>
            <h1 className='text-center font-bold text-2xl text-primary pb-5'>Login As Seller</h1>
            <div className='space-y-5'>
                <TextField
                    label="Email"
                    name="email"
                    fullWidth
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                {showOtp &&
                    <div className='space-y-2'>
                        <p className='font-medium text-sm text-gray-400'>Enter OTP Sent to your email</p>
                        <TextField
                            label="OTP"
                            name="otp"
                            fullWidth
                            value={formik.values.otp}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.otp && Boolean(formik.errors.otp)}
                            helperText={formik.touched.otp && formik.errors.otp}
                        />
                    </div>
                }
            </div>
        </div>
    )
}

export default SellerLoginForm