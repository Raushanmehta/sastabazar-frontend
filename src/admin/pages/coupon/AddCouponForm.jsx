import React from "react";
import { useFormik } from "formik";
import { Box, Button, Grid, TextField } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const AddCouponForm = () => {
  const formik = useFormik({
    initialValues: {
      code: "",
      discountPercentage: "",
      validityStartDate: null,
      validityEndDate: null,
      minimumOrderValue: "",
    },

    onSubmit: (values) => {
      const formattedValues = {
        ...values,
        validityStartDate: values.validityStartDate
          ? values.validityStartDate.toISOString()
          : null,
        validityEndDate: values.validityEndDate
          ? values.validityEndDate.toISOString()
          : null,
      };

      console.log("Form Submit:", formattedValues);
    },
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          {/* Coupon Code */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              name="code"
              label="Coupon Code"
              value={formik.values.code}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.code && Boolean(formik.errors.code)}
              helperText={formik.touched.code && formik.errors.code}
            />
          </Grid>

          {/* Discount Percentage */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              type="number"
              name="discountPercentage"
              label="Discount Percentage"
              value={formik.values.discountPercentage}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.discountPercentage && Boolean(formik.errors.discountPercentage)}
              helperText={formik.touched.discountPercentage && formik.errors.discountPercentage}
            />
          </Grid>

          {/* Start Date */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <DatePicker
              label="Validity Start Date"
              value={formik.values.validityStartDate}
              onChange={(value) =>
                formik.setFieldValue("validityStartDate", value)
              }
              sx={{ width: "100%" }}
            />
          </Grid>

          {/* End Date */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <DatePicker
              label="Validity End Date"
              value={formik.values.validityEndDate}
              onChange={(value) =>
                formik.setFieldValue("validityEndDate", value)
              }
              sx={{ width: "100%" }}
            />
          </Grid>

          {/* Minimum Order Value */}
          <Grid size={{ xs: 12}}>
            <TextField
              fullWidth
              type="number"
              name="minimumOrderValue"
              label="Minimum Order Value"
              value={formik.values.minimumOrderValue}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.minimumOrderValue && Boolean(formik.errors.minimumOrderValue)}
              helperText={formik.touched.minimumOrderValue && formik.errors.minimumOrderValue}
            />
          </Grid>

          {/* Submit Button */}
          <Grid size={{ xs: 12 }}>
            <Button 
            fullWidth
            type="submit"
            variant="contained"
            sx={{p :2 }}
            >
              Add New Coupon
            </Button>
          </Grid>
        </Grid>
      </Box>
    </LocalizationProvider>
  );
};

export default AddCouponForm;
