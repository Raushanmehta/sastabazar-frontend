import { Box, Button, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddressFormSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  mobile: Yup.string().required("Mobile is required").matches(/^[6-9]\d{9}$/, "Invalid mobile number"),
  pincode: Yup.string().required("Pincode is required").matches(/^[1-9][0-9]{5}$/, "Invalid pincode"),
  address: Yup.string().required("Address is required"),
  locality: Yup.string().required("Locality is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
});

const AddressForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      pincode: "",
      address: "",
      locality: "",
      city: "",
      state: "",
    },
    validationSchema: AddressFormSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Box sx={{ max: "auto" }} >
      <h1 className="text-center text-2xl font-bold pb-5">
        Contact Details
      </h1>

      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>

          {/* Name - Full Row */}
          <Grid size={{ xs: 12 }}>
            <TextField
              name="name"
              label="Name"
              fullWidth
              variant="standard"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>

          {/* Mobile + Pincode - Same Row */}
          <Grid size={{ xs: 6 }}>
            <TextField
              name="mobile"
              label="Mobile"
              fullWidth
              variant="standard"
              value={formik.values.mobile}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.mobile && Boolean(formik.errors.mobile)}
              helperText={formik.touched.mobile && formik.errors.mobile}
            />
          </Grid>

          <Grid size={{ xs: 6 }}>
            <TextField
              name="pincode"
              label="Pincode"
              fullWidth
              variant="standard"
              value={formik.values.pincode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.pincode && Boolean(formik.errors.pincode)}
              helperText={formik.touched.pincode && formik.errors.pincode}
            />
          </Grid>

          {/* Address - Full Row */}
          <Grid size={{ xs: 12 }}>
            <TextField
              name="address"
              label="Address"
              fullWidth
              variant="standard"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
          </Grid>

          {/* Locality - Full Row */}
          <Grid size={{ xs: 12 }}>
            <TextField
              name="locality"
              label="Locality"
              fullWidth
              variant="standard"
              value={formik.values.locality}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.locality && Boolean(formik.errors.locality)}
              helperText={formik.touched.locality && formik.errors.locality}
            />
          </Grid>

          {/* City + State - Same Row */}
          <Grid size={{ xs: 6 }}>
            <TextField
              name="city"
              label="City"
              fullWidth
              variant="standard"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
            />
          </Grid>

          <Grid size={{ xs: 6 }}>
            <TextField
              name="state"
              label="State"
              fullWidth
              variant="standard"
              value={formik.values.state}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.state && Boolean(formik.errors.state)}
              helperText={formik.touched.state && formik.errors.state}
            />
          </Grid>
        </Grid>

        {/* Button - Full Row */}
        <Grid width={{ xs: "auto" }}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3 }}
          >
            Add Address
          </Button>
        </Grid>
      </form>
    </Box>
  );
};

export default AddressForm;
