import React from 'react';

const ShopByCategoryCard = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-2 sm:gap-3 cursor-pointer group">
      <div className="h-[100px] w-[100px] sm:h-[130px] sm:w-[130px] md:h-[150px] md:w-[150px] 
      rounded-full overflow-hidden">
        <img
          src="https://images-cdn.ubuy.co.id/66187461036c894c914a804a-cooking-utensils-set-35-pcs-kitchen.jpg"
          alt="Shop by category - Kitchen"
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out
           group-hover:scale-95"
        />
      </div>
      <h1 className="text-sm sm:text-base md:text-lg font-semibold text-center">Kitchen</h1>
    </div>
  );
};

export default ShopByCategoryCard;
