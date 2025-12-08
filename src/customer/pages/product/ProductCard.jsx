import React, { useEffect, useState } from "react";
import "./ProductCard.css";
import { Button } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { cyan} from "@mui/material/colors";
import ModeCommentIcon from '@mui/icons-material/ModeComment';
const images = [
  "https://i.pinimg.com/736x/82/4e/4b/824e4b5be5776cbb4a0a21fe92dff77d.jpg",
  "https://m.media-amazon.com/images/I/61iyIOQS87L._AC_UY1000_.jpg",
  "https://m.media-amazon.com/images/I/61iyIOQS87L._AC_UY1000_.jpg"
];

const ProductCard = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 1000);
    } else {
      setCurrentImage(0);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovered]);

  return (
    <div className="group px-4 relative">
      <div
        className="card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {images.map((item, index) => (
          <img
            key={index}
            src={item}
            alt={`item-${index}`}
            className="card-media object-top"
            style={{
              transform: `translateX(${(index - currentImage) * 100}%)`
            }}
          />
        ))}
        {isHovered &&
          <div className="indicator flex flex-col items-center space-x-2">
            <div className="flex gap-3">
              <Button variant="contained" color="secondary">
                <FavoriteBorderIcon sx={{ color:cyan[500] }}/>
              </Button>
              <Button variant="contained" color="secondary">
                <ModeCommentIcon sx={{ color:cyan[500] }}/>
              </Button>
            </div>

          </div>

        }
      </div>
      <div className="details pt-3 space-y-1 group-hover-effect rounded-md">
        <div className="name">
          <h1>Product Name</h1>
          <p>Blue T-Shirt</p>

        </div>
        <div className="price flex items-center gap-3">
          <span className="front-sans text-gray-400">
            ₹ 499
          </span>
          <span className="thin-line-through text-gray-400">
            ₹ 999
          </span>
          <span className="text-primary-color font-semibold">
            60%
          </span>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;
