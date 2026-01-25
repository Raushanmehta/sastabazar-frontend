import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";

const CreateDealForm = () => {
  const formik = useFormik({
    initialValues: {
      discount: "",
      category: "",
    },
    onSubmit: (values) => {
      console.log("Submitted Values:", values);
    },
  });

  return (
    <div>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-6">
        <span className="text-base font-semibold text-black">Deals</span>
        <ChevronRightIcon fontSize="small" />
        <span>
          <Link to="/admin" className="cursor-pointer">
            Home
          </Link>
        </span>
        <ChevronRightIcon fontSize="small" />
        <span className="text-gray-400">Add Deals</span>
      </div>

      {/* Page Title */}
      <h1 className="text-xl font-semibold text-primary mb-6">
        Create Deals
      </h1>

      {/* Form */}
      <Box component="form" onSubmit={formik.handleSubmit}>
        <Stack spacing={3}>
          {/* Discount */}
          <TextField
            fullWidth
            name="discount"
            label="Discount (%)"
            type="number"
            value={formik.values.discount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {/* Category */}
          <FormControl fullWidth>
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category-label"
              id="category"
              name="category"
              value={formik.values.category}
              label="Category"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="electronics">Electronics</MenuItem>
              <MenuItem value="fashion">Fashion</MenuItem>
              <MenuItem value="grocery">Grocery</MenuItem>
            </Select>
          </FormControl>

          {/* Submit Button */}
          <Button variant="contained" fullWidth type="submit" sx={{ p: 2 }}>
            Create Deal
          </Button>
        </Stack>
      </Box>
    </div>
  );
};

export default CreateDealForm;
