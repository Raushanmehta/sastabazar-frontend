import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CloseIcon from '@mui/icons-material/Close';

import * as Yup from 'yup';

import { colors } from '../../../data/filter/colors';
import {uploadToCloudinary} from '../../../utils/uploadToCloudinary';


import {mainCategory} from '../../../data/category/mainCategory';
import { menLevelTwo } from '../../../data/category/levelTwo/menLevelTwo';
import { womenLevelTwo } from '../../../data/category/levelTwo/womenLevelTwo';
import { furnitureLevelTwo } from '../../../data/category/levelTwo/furnitureLevelTwo';
import { electronicLevelTwo } from '../../../data/category/levelTwo/electronicsLevelTwo';

import { menLevelThree } from '../../../data/category/levelThree/menLevelThree';
import { womenLevelThree } from '../../../data/category/levelThree/womenLevelThree';
import { furnitureLevelThree } from '../../../data/category/levelThree/furnitureLevelThree';
import { electronicsLevelThree } from '../../../data/category/levelThree/electronicsLevelThree';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';


const categoryTwo = {
  men: menLevelTwo,
  women: womenLevelTwo,
  home_furniture: furnitureLevelTwo,
  electronics: electronicLevelTwo
}

const categoryThree = {
  men: menLevelThree,
  women: womenLevelThree,
  home_furniture: furnitureLevelThree,
  electronics: electronicsLevelThree
};


const sizes = [
    { name: "XS"},
    { name: "S"},
    { name: "M"},
    { name: "L"},
    { name: "XL"},
];

const validationSchema = Yup.object ({
    title: Yup.string()
    .min(5, "Title should be at least 5 characters long")
    .required("Title is required"),
    description: Yup.string()
    .min(10, "Description should be at least 10 characters long")
    .required("Description is required"),
    mrpPrice: Yup.number()
    .positive("MRP Price should be a grater than 0")
    .required("MRP Price is required"),
    sellingPrice: Yup.number()
    .positive("Selling Price should be a grater than 0")
    .required("Selling Price is required"),
    quantity: Yup.number()
    .positive("Quantity should be a grater than 0")
    .required("Quantity is required"),
    color: Yup.string()
    .required("Color is required"),
    category: Yup.string()
    .required("Category is required"),
    sizes: Yup.string()
    .required("Sizes are required"),
    images: Yup.array()
    .min(1, "At least one image is required")
    .required("Images are required"),
    
})



const AddProductForm = () => {
    const [uploadImage, setUploadImage] = useState(false);
    // const { sellers, sellerProduct} = useSelector();
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            sellingPrice: '',
            mrpPrice: '',
            quantity: '',
            color: '',
            sizes: '',
            images: [],
            category: '',
            category2: '',
            category3: '',
        },
        onSubmit: (values) => {
            console.log(values);

        }
    });

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        setUploadImage(true);
        const image = await uploadToCloudinary(file);
        formik.setFieldValue("images", [...formik.values.images, image]);
        setUploadImage(false);
    };

    const handleRemoveImage = (index) => {
        const updatedImages = [...formik.values.images];
        updatedImages.splice(index, 1);
        formik.setFieldValue("images", updatedImages);

    };

    const childCategory = (category, parentCategoryId) => {
        return category.filter((child) => {
            console.log("Category", parentCategoryId, child);
            return child.parentCategoryId === parentCategoryId;
        });
    };


    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    }

    // useEffect(() => {
    //     if(sellerProduct.productCreated || sellerProduct.error){
    //         setOpenSnackbar(true);
    //     }
    // },[sellerProduct.productCreated, sellerProduct.error])


    return (
        <div>
            <form onSubmit={formik.handleSubmit} className='space-y-4 p-4'>
                <Grid container spacing={2}>
                    <Grid className='flex flex-wrap gap-5' item size={{ xs: 12 }}>
                        <input
                            type='file'
                            accept='image/*'
                            id='fileInput'
                            style={{ display: "none" }}
                            onChange={handleImageChange}
                        />

                        <label className='relative' htmlFor="fileInput">
                            <span className='w-24 h-24 cursor-pointer flex items-center 
                            justify-center p-3 border rounded-md border-gray-200'>
                                <AddPhotoAlternateIcon className='text-gray-400' />
                            </span>
                            {uploadImage  && (
                                <div className='absolute left-0 right-0 top-0 bottom-0 
                                w-24 h-24 flex justify-center items-center'>
                                    <CircularProgress />
                                </div>
                            )}
                        </label>

                        <div className='flex flex-wrap gap-2'>
                            {formik.values.images.map((image, index) => (
                                <div className='relative'>
                                    <img
                                        className='w-24 h-24 object-cover '
                                        src={image}
                                        key={index}
                                        alt={`ProductImage ${index + 1}`} />
                                    <IconButton
                                        onClick={() => handleRemoveImage(index)}
                                        className=''
                                        size='small'
                                        color='error'
                                        sx={{
                                            position: "absolute",
                                            top: 0,
                                            right: 0,
                                            outline: "none"
                                        }}
                                    >
                                        <CloseIcon sx={{ fontSize: "16px" }} />
                                    </IconButton>

                                </div>
                            ))}

                        </div>

                    </Grid>

                    <Grid size={{ xs: 12 }}>
                        <TextField
                            fullWidth
                            label="Title"
                            name="title"
                            id='title'
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            error={formik.touched.title && Boolean(formik.errors.title)}
                            helperText={formik.touched.title && formik.errors.title}
                            required
                        />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <TextField
                            multiline
                            rows={4}
                            fullWidth
                            label="Description"
                            name="description"
                            id='description'
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            error={formik.touched.description && Boolean(formik.errors.description)}
                            helperText={formik.touched.description && formik.errors.description}
                            required
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 3, lg: 3 }}>
                        <TextField
                            fullWidth
                            type='number'
                            label="MRP Price"
                            name="mrpPrice"
                            id='mrp_price'
                            value={formik.values.mrpPrice}
                            onChange={formik.handleChange}
                            error={formik.touched.mrpPrice && Boolean(formik.errors.mrpPrice)}
                            helperText={formik.touched.mrpPrice && formik.errors.mrpPrice}
                            required
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 3, lg: 3 }}>
                        <TextField
                            fullWidth
                            type='number'
                            label="Selling Price"
                            name="sellingPrice"
                            id='selling_price'
                            value={formik.values.sellingPrice}
                            onChange={formik.handleChange}
                            error={formik.touched.sellingPrice &&
                                Boolean(formik.errors.sellingPrice)}
                            helperText={formik.touched.sellingPrice && formik.errors.sellingPrice}
                            required
                        />
                    </Grid>


                    <Grid size={{ xs: 12, md: 4, lg: 3 }}>
                        <FormControl
                            fullWidth
                            error={formik.touched.color && Boolean(formik.errors.color)}
                            required
                        >
                            <InputLabel id='color-label'>Color</InputLabel>
                            <Select
                                labelId='color-label'
                                id='color'
                                name='color'
                                value={formik.values.color}
                                onChange={formik.handleChange}
                                label="Color "
                                
                            >
                                <MenuItem value=''>
                                    <em>None</em>
                                </MenuItem>
                                {
                                    colors.map((color) => <MenuItem value={color.name}>
                                        <div className='flex gap-3'>
                                            <span style={{ background: color.hex }}
                                                className={`h-5 w-5 rounded-full 
                                        ${color.name === "White" ? "bordr" : ''}`}></span>
                                            <p>{color.name}</p>
                                        </div>
                                    </MenuItem>)
                                }

                            </Select>
                            {
                                formik.touched.color && formik.errors.color && (
                                    <FormHelperText>{formik.errors.color}</FormHelperText>
                                )
                            }
                        </FormControl>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4, lg: 3 }}>
                        <FormControl
                            fullWidth
                            error={formik.touched.sizes && Boolean(formik.errors.sizes)}
                            required
                            
                        >
                            <InputLabel id='sizes-label'>Sizes</InputLabel>
                            <Select
                                labelId='sizes-label'
                                id='sizes'
                                name='sizes'
                                value={formik.values.sizes}
                                onChange={formik.handleChange}
                                label="Sizes"
                                
                            >
                                <MenuItem value=''>
                                    <em>None</em>
                                </MenuItem>
                                {
                                    sizes.map((size) => <MenuItem value={size.name}>
                                        <div className='flex gap-3'>
                                            <span style={{ background: size.hex }}
                                                className={`h-5 w-5 rounded-full 
                                        ${size.name === "White" ? "bordr" : ''}`}></span>
                                            <p>{size.name}</p>
                                        </div>
                                    </MenuItem>)
                                }
                            </Select>

                        </FormControl>

                    </Grid>

                    <Grid size={{ xs: 12, md: 4, lg: 4 }}>
                        <FormControl
                            fullWidth
                            error={formik.touched.category && Boolean(formik.errors.category)}
                            required
                        >
                            <InputLabel id='category-label'>Category</InputLabel>
                            <Select
                                labelId='category-label'
                                id='category'
                                name='category'
                                value={formik.values.category}
                                onChange={formik.handleChange}
                                label="Category"
                            >
                                <MenuItem value=''>
                                    <em>None</em>
                                </MenuItem>
                                {
                                    mainCategory.map((item) => (
                                        <MenuItem value={item.categoryId}>{item.name}</MenuItem>
                                    ))
                                }

                            </Select>

                        </FormControl>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4, lg: 4 }}>
                        <FormControl
                            fullWidth
                            error={formik.touched.category && Boolean(formik.errors.category)}
                            required
                        >
                            <InputLabel id='category-label'>Second Category</InputLabel>
                            <Select
                                labelId='category2-label'
                                id='category2'
                                name='category2'
                                value={formik.values.category2}
                                onChange={formik.handleChange}
                                label="Second Category"
                            >
                                <MenuItem value=''>
                                    <em>None</em>
                                </MenuItem>

                                {
                                    formik.values.category &&
                                    categoryTwo[formik.values.category]?.map((item) => (
                                        <MenuItem value={item.categoryId}>{item.name}</MenuItem>
                                    ))
                                }

                            </Select>
                            {
                                formik.touched.category && formik.errors.category && (
                                    <FormHelperText>{formik.errors.category}</FormHelperText>
                                )}


                        </FormControl>

                    </Grid>

                    <Grid size={{ xs: 12, md: 4, lg: 4 }}>
                        <FormControl
                            fullWidth
                            error={formik.touched.category && Boolean(formik.errors.category)}
                            required
                        >
                            <InputLabel id='category3-label'>Third Category</InputLabel>
                            <Select
                                labelId='category3-label'
                                id='category3'
                                name='category3'
                                value={formik.values.category3}
                                onChange={formik.handleChange}
                                label="Third Category"
                            >
                                <MenuItem value=''>
                                    <em>None</em>
                                </MenuItem>
                                {formik.values.category &&
                                    childCategory(
                                        categoryThree[formik.values.category], formik.values.category2)?.map((item) => (
                                            <MenuItem value={item.categoryId}>{item.name}</MenuItem>
                                        ))
                                }

                            </Select>
                            {
                                formik.touched.category && formik.errors.category && (
                                    <FormHelperText>{formik.errors.category}</FormHelperText>
                                )}

                        </FormControl>

                    </Grid>

                    <Grid   size={{ xs: 12 }}>
                        <Button
                            sx={{ p: '14px' }}
                            color='primary'
                            variant="contained"
                            type="submit"
                            disabled=''
                            fullWidth
                        >
                            {
                                false ? <CircularProgress size='small'
                                    sx={{ width: '27px', height: "27px" }} /> : "Add Product"
                            }


                        </Button>

                    </Grid>

                </Grid>
            </form>
            {/* <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={true ? "error : " : "success"}
                    variant='filled'
                    sx={{ width: '100%' }}
                >
                    {true ? "Product Added Failed" : "Product Added Successfully"}

                </Alert>

            </Snackbar> */}
        </div>
    )
}

export default AddProductForm