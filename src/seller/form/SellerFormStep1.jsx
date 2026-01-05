import { Box, TextField, Stack } from "@mui/material";

const SellerFormStep1 = ({ formik }) => {
  return (
    <Box>
      <p className="text-xl font-bold text-center pb-8">
        Contact Details
      </p>

      <Stack spacing={3}>
        <TextField
          label="Mobile"
          name="mobile"
          fullWidth
          value={formik.values.mobile}
          onChange={formik.handleChange}
          error={formik.touched.mobile && Boolean(formik.errors.mobile)}
          helperText={formik.touched.mobile && formik.errors.mobile}
        />

        <TextField
          label="GSTIN"
          name="GSTIN"
          fullWidth
          value={formik.values.GSTIN}
          onChange={formik.handleChange}
          error={formik.touched.GSTIN && Boolean(formik.errors.GSTIN)}
          helperText={formik.touched.GSTIN && formik.errors.GSTIN}
        />
      </Stack>
    </Box>
  );
};

export default SellerFormStep1;
