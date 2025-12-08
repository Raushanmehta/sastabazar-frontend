import React from 'react';
import ShopByCategoryCard from './ShopByCategoryCard';

const ShopByCategory = () => {
  return (
    <section className="py-10 px-4 sm:px-8 lg:px-20">
      <h1 className="text-2xl sm:text-3xl font-bold mb-10 sm:mb-16 text-center">
        SHOP BY CATEGORY
      </h1>

      {/* Responsive grid for all devices */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
      lg:grid-cols-6 gap-6 sm:gap-8 justify-items-center">
        {[1, 2, 3, 4, 5, 6, 7,8,9,10,11,12].map((item) => (
          <ShopByCategoryCard key={item} />
        ))}
      </div>
    </section>
  );
};

export default ShopByCategory;
