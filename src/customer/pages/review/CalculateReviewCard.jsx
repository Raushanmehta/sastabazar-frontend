import React from "react";
import { Card, CardContent, Box, Typography } from "@mui/material";

// --- Rating Calculation Helpers ---
function avgRating(reviews) {
  if (!reviews || reviews.length === 0) return 0;
  const sum = reviews.reduce((s, r) => s + (Number(r.rating) || 0), 0);
  return parseFloat((sum / reviews.length).toFixed(2));
}

function distributeCategories(reviews) {
  const buckets = { Excellent: 0, "Very Good": 0, Good: 0, Average: 0, Poor: 0 };

  reviews.forEach((r) => {
    const rating = Number(r.rating) || 0;
    if (rating >= 5) buckets.Excellent++;
    else if (rating >= 4) buckets["Very Good"]++;
    else if (rating >= 3) buckets.Good++;
    else if (rating >= 2) buckets.Average++;
    else buckets.Poor++;
  });

  return buckets;
}

const CalculateReviewCard = ({ reviews = [0] }) => {
  const count = reviews.length;
  const buckets = distributeCategories(reviews);
  const percent = (n) => (count === 0 ? 0 : Math.round((n / count) * 100));

  return (
    <Card sx={{ maxWidth: 900, p: 2 }}>
      <CardContent>
        <Box flexBasis={350}>
          
          {/* Rating Bar Layout */}
          {[
            { label: "Excellent", color: "green", value: buckets.Excellent },
            { label: "Very Good", color: "lightgreen", value: buckets["Very Good"] },
            { label: "Good", color: "teal", value: buckets.Good },
            { label: "Average", color: "orange", value: buckets.Average },
            { label: "Poor", color: "red", value: buckets.Poor },
          ].map((item) => (
            <Box key={item.label} mb={1} display="flex" alignItems="center" gap={2}>
              <Typography sx={{ width: 90 }}>{item.label}</Typography>

              <Box flexGrow={1}>
                <Box
                  sx={{
                    height: 8,
                    background: "#e0e0e0",
                    borderRadius: 5,
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      width: `${percent(item.value)}%`,
                      height: "100%",
                      background: item.color,
                    }}
                  />
                </Box>
              </Box>

              <Typography sx={{ width: 50 }}>{item.value}</Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default CalculateReviewCard;