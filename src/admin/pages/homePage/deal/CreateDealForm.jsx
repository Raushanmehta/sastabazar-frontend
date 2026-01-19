import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'

const CreateDealForm = () => {
    const formik = useFormik({
        initialValues: {
            discount: 0,
            category: ''
        },
        onSubmit: (values) => {
            console.log("Submit", values)
        }
    })
    return (
        <Box component={'form'} onSubmit={formik.handleSubmit} className='space-y-6'>

            <Typography variant='h4' className='text-center'>
                Create Deal
            </Typography>

            <TextField
                fullWidth
                name='discount'
                label='Discount'
                type='number'
                onChange={formik.handleChange}
                value={formik.values.discount}
                error={formik.touched.discount && Boolean(formik.errors.discount)}
                helperText={formik.touched.discount && formik.errors.discount}
            />

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={formik.values.category}
                    label="Category"
                    onChange={formik.handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                </Select>
            </FormControl>

            <Button variant='contained' fullWidth type='submit'>
                Create Deal
            </Button>

        </Box>
    )
}

export default CreateDealForm