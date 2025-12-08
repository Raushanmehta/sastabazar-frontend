import React from 'react';
import SimilerProductCard from './SimilerProductCard';

const SimilerProduct = () => {
  return (
    <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-between gap-4 gap-y-8">
      {[1,2,3,4,5,6].map((item, index) => (
        <SimilerProductCard key={index} />
      ))}
    </div>
  );
};

export default SimilerProduct;
