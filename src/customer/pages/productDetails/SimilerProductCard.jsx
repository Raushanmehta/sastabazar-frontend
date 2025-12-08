import React from "react";


const SimilerProductCard = () => {
  return (
    <div className="group px-2 relative w-full">
      
      {/* Product Image */}
      <div className="card">
        <img
          src="https://i.pinimg.com/736x/82/4e/4b/824e4b5be5776cbb4a0a21fe92dff77d.jpg"
          className="card-media"
          alt="Product"
        />
      </div>

      {/* Details */}
      <div className="details group-hover-effect pt-3 space-y-1 rounded-md w-full">
        
        <div className="name">
          <h1 className="font-semibold text-gray-800">Product Name</h1>
          <p className="text-gray-600">Blue T-Shirt</p>
        </div>

        <div className="price flex items-center gap-3">
          <span className="text-gray-700 font-medium">₹ 499</span>
          <span className="thin-line-through text-gray-400">₹ 999</span>
          <span className="text-red-600 font-semibold">60%</span>
        </div>

      </div>
    </div>
  );
};

export default SimilerProductCard;
