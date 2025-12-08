import React, { useState } from 'react';
import FilterSection from './FilterSection';
import ProductCard from './ProductCard';

// MUI imports
import {
    useTheme,
    useMediaQuery,
    IconButton,
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Divider,
    Pagination
} from '@mui/material';

import FilterAltIcon from '@mui/icons-material/FilterAlt';

const Product = () => {
    const theme = useTheme();
    const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
    const [sort, setSort] = useState("");
    const [page, setPage] = useState(1);

    const handleSortChange = (event) => {
        setSort(event.target.value);
    };

    const handlePageChange = (value) => {
        setPage(value);
    };

    return (
        <div className='-z-10 mt-20'>
            <div>
                <h1 className='text-3xl text-center font-bold text-gray-700 pb-5 px-9 uppercase space-x-2'>
                    Men T-shirts
                </h1>
            </div>

            <div className='lg:flex'>
                <section className='filter_section hidden lg:block w-[20%] '>
                    <FilterSection />
                </section>

                <div className='w-full lg:w-[80%] space-y-5'>
                    <div className='flex justify-between items-center px-9 h-[40px]'>
                        <div className='relative w-[50%]'>

                            {!isLarge && (
                                <IconButton>
                                    <FilterAltIcon />
                                </IconButton>
                            )}

                            {!isLarge && (
                                <Box className="w-full mt-2">
                                    <FilterSection />
                                </Box>
                            )}
                        </div>

                        <FormControl size='small' sx={{ width: '15%' }}>
                            <InputLabel id="sort-label">Sort</InputLabel>
                            <Select
                                labelId="sort-label"
                                id="sort-select"
                                value={sort}
                                label="Sort"
                                onChange={handleSortChange}
                            >
                                <MenuItem value="low-high">Price: Low to High</MenuItem>
                                <MenuItem value="high-low">Price: High to Low</MenuItem>
                                <MenuItem value="newest">Newest</MenuItem>
                            </Select>
                        </FormControl>

                    </div>
                    <Divider />
                    <section className='products_section p-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-items-center'>
                        {[1, 1, 1, 1, 1].map((item) => (
                            <ProductCard key={item} />
                        ))}
                    </section>
                    <div className="flex justify-center items-center py-10">
                    <Pagination
                        page={page}
                        onChange={(e, value) => handlePageChange(value)}
                        count={10}
                        shape="rounded"
                        color='primary'
                    />
                </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
