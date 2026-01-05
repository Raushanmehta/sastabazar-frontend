import { Box, Stack, TextField } from '@mui/material'

const SellerFormStep3 = ({ formik }) => {
    return (
        <Box sx={{ max: "auto" }}>

            <Stack spacing={3}>
                <TextField
                    label="Account Number"
                    name="bankDetails.bankDetails.accountNumber"
                    fullWidth
                    value={formik.values.bankDetails.accountNumber}
                    onChange={formik.handleChange}
                    error={formik.touched.bankDetails?.accountNumber && Boolean(formik.errors.bankDetails.accountNumber)}
                    helperText={formik.touched.bankDetails?.accountNumber && formik.errors.bankDetails.accountNumber}
                />

                <TextField
                    label="IFSC Code"
                    name="bankDetails.ifscCode"
                    fullWidth
                    value={formik.values.bankDetails.ifscCode}
                    onChange={formik.handleChange}
                    error={formik.touched.bankDetails?.ifscCode && Boolean(formik.errors.bankDetails.ifscCode)}
                    helperText={formik.touched.bankDetails?.ifscCode && formik.errors.bankDetails.ifscCode}
                />

                <TextField
                    label="Account Holder Name"
                    name="bankDetails.bankDetails.accountHolderName"
                    fullWidth
                    value={formik.values.bankDetails.accountHolderName}
                    onChange={formik.handleChange}
                    error={formik.touched.bankDetails?.accountHolderName && Boolean(formik.errors.bankDetails.accountHolderName)}
                    helperText={formik.touched.bankDetails?.accountHolderName && formik.errors.bankDetails.accountHolderName}

                />
            </Stack>
        </Box>
    )
}

export default SellerFormStep3