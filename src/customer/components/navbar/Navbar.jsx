import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Storefront } from "@mui/icons-material";
import CategorySheet from "./CategorySheet";
import { mainCategory } from "../../../data/category/mainCategory";

const Navbar = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const [selectedCategory, setSelectedCategory] = useState("men");
  const [showCategorySheet, setShowCategorySheet] = useState(false);
  const isLoggedIn = true;

  return (
    <Box className="sticky top-0 left-0 right-0 z-50 text-gray-800 bg-white shadow-md"  sx={{ zIndex: 2 }}>
      <div className="flex items-center justify-between h-[70px] px-5 lg:px-20">
        <div className="flex items-center gap-6">
          {/* Logo + Menu Icon */}
          <div className="flex items-center gap-2">
            {!isLarge && (
              <IconButton>
                <MenuIcon />
              </IconButton>
            )}
            <h1 className="cursor-pointer text-2xl font-semibold text-gray-800">
              Sastabazar
            </h1>
          </div>

          {/* Main Categories */}
          {isLarge && (
            <ul className="flex items-center font-medium text-gray-700 gap-5">
              {mainCategory.map((item) => (
                <li
                  key={item.categoryId}
                  onMouseLeave={() => setShowCategorySheet(false)}
                  onMouseEnter={() => {
                    setShowCategorySheet(true);
                    setSelectedCategory(item.categoryId);
                  }}
                  className="hover:text-primary-color cursor-pointer hover:border-b-3 
                  border-primary-color px-2 h-[40px] flex items-center transition-all"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex items-center gap-2 lg:gap-6">
          <IconButton>
            <SearchIcon />
          </IconButton>

          {isLoggedIn ? (
            <Button className="flex items-center gap-2 normal-case">
              <Avatar
                sx={{ width: 29, height: 29 }}
                src="https://www.svgrepo.com/show/382096/female-avatar-girl-face-woman-user.svg"
              />
              <h1 className="font-semibold hidden lg:block">Sastabazar</h1>
            </Button>
          ) : (
            <Button color="primary" variant="contained">
              Login
            </Button>
          )}

          {isLarge && (
            <IconButton>
              <FavoriteBorderIcon sx={{ fontSize: 26 }} />
            </IconButton>
          )}

          <IconButton>
            <ShoppingCartIcon sx={{ fontSize: 26, color: "gray" }} />
          </IconButton>

          {isLarge && (
            <Button
              startIcon={<Storefront />}
              variant="outlined"
              className="normal-case"
            >
              Seller
            </Button>
          )}
        </div>
      </div>

      {/* Category Sheet */}
      {showCategorySheet && (
        <div
          onMouseLeave={() => setShowCategorySheet(false)}
          onMouseEnter={() => setShowCategorySheet(true)}
          className="categorySheet absolute top-[4.41rem] left-20 right-20 border-b border-gray-200"
        >
          <CategorySheet selectedCategory={selectedCategory} />
        </div>
      )}
    </Box>
  );
};

export default Navbar;
