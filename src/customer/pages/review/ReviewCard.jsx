import React from 'react';
import { Avatar, Grid, Box, Rating, IconButton } from '@mui/material';
import { cyan, red } from '@mui/material/colors';
import { Delete } from '@mui/icons-material';

const ReviewCard = () => {
  return (
    <div className="w-full flex justify-between items-start ">

      {/* Left Section */}
      <Grid container spacing={2}>

        {/* Avatar */}
        <Grid item xs={2} sm={1}>
          <Avatar 
            sx={{ width: 56, height: 56, bgcolor: cyan[500] }} 
            className="text-white font-bold"
          >
            R
          </Avatar>
        </Grid>

        {/* Review Content */}
        <Grid item xs={10} sm={11}>
          <div className="space-y-2">

            {/* User Info */}
            <div>
              <p className="font-medium text-lg">Raushan</p>
              <p className="opacity-70 text-sm">12 Dec 2024</p>
            </div>

            {/* Rating */}
            <Rating 
              name="read-only-rating"
              value={4.5}
              precision={0.5}
              readOnly
            />

            {/* Review Text */}
            <p className="text-gray-700">Value for money product</p>

            {/* Review Image */}
            <div>
              <img
                className="w-24 h-24 rounded-md object-cover "
                src="https://www.bringitonline.in/uploads/2/2/4/5/22456530/creative-hanger-product-hanger-clothing-fashion-photography-delhi-ncr-mumbai-noida-gurgaon-india-new-images-1_orig.jpg"
                alt="review-product"
              />
            </div>

          </div>
        </Grid>

      </Grid>

      {/* Delete Button */}
      <IconButton className="ml-4 mt-2">
        <Delete sx={{ color: red[500], fontSize: 28 }} />
      </IconButton>

    </div>
  );
};

export default ReviewCard;
