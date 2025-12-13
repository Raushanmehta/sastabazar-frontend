import { Box, Grid, TextField } from "@mui/material"


const AddressForm = () => {



  return (

    <Box sx={{ minWidth: 600, maxWidth: "auto" }}>

      <p className="text-center justify-center text-xl font-bold pb-5">Contact Details</p>

      <form>
        <Grid container spacing={8}>
          <Grid size={{ xs: 12 }}>
            <TextField
              required
              // value={Formik.values.name}
              name="name"
              label="Name"
              fullWidth
              autoComplete="given-name"
              variant="standard"
            />

          </Grid>
        </Grid>


      </form>
    </Box>
  )
}

export default AddressForm