import { Box, Stack, TextField } from "@mui/material";

const SellerFormStep4 = ({ formik }) => {
    return (
        <Box sx={{ maxWidth: "auto" }}>
            <Stack spacing={3}>
                <TextField
                    label="Business Name"
                    name="businessDetails.businessName"
                    fullWidth
                    value={formik.values.businessDetails.businessName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                        formik.touched.businessDetails?.businessName &&
                        Boolean(formik.errors.businessDetails?.businessName)
                    }
                    helperText={
                        formik.touched.businessDetails?.businessName &&
                        formik.errors.businessDetails?.businessName
                    }
                />

                <TextField
                    label="Seller Name"
                    name="sellerName"
                    fullWidth
                    value={formik.values.sellerName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.sellerName && Boolean(formik.errors.sellerName)}
                    helperText={formik.touched.sellerName && formik.errors.sellerName}
                />

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

                <TextField
                    label="Password"
                    name="password"
                    type="password"
                    fullWidth
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
            </Stack>
        </Box>
    );
};

export default SellerFormStep4;
