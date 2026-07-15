import React from "react";

function ShopProductCard({ product, handleProductClick }) {
  return (
    <article
      className="bg-white text-center cursor-pointer  max-w-sm mx-auto h-auto shadow-none transition-shadow duration-300  hover:shadow-lg hover:shadow-gray-400"
      onClick={() => handleProductClick(product)}
      
    >
      <img
        alt=""
        className="h-[300px] w-full object-cover "
        src={product.images[0].url}
      />
      <div className="flex flex-col items-center px-6 py-[25px]">
        <h3 className="text-base font-bold leading-6 tracking-[0.1px] text-[#252b42]">
          {product.name}
        </h3>
        <p className="mt-2.5 text-sm font-bold leading-6 tracking-[0.2px] text-[#737373]">
          {product.description}
        </p>
        <div className="mt-2.5 flex items-center gap-[5px] py-[5px] text-base font-bold leading-6 tracking-[0.1px]">
          <span className="text-[#23856d]">${product.price}</span>
        </div>
      </div>
    </article>
  );
}

export default ShopProductCard;
