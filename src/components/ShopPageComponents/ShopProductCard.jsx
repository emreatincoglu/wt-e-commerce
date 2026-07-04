import React from 'react';

function ShopProductCard({ product }) {
  return (
    <article className="bg-white text-center">
      <img alt="" className="h-[300px] w-full object-cover" src={product.image} />
      <div className="flex flex-col items-center px-6 py-[25px]">
        <h3 className="text-base font-bold leading-6 tracking-[0.1px] text-[#252b42]">
          {product.title}
        </h3>
        <p className="mt-2.5 text-sm font-bold leading-6 tracking-[0.2px] text-[#737373]">
          {product.department}
        </p>
        <div className="mt-2.5 flex items-center gap-[5px] py-[5px] text-base font-bold leading-6 tracking-[0.1px]">
          <span className="text-[#bdbdbd]">{product.oldPrice}</span>
          <span className="text-[#23856d]">{product.price}</span>
        </div>
        <div className="mt-[5px] flex gap-[6px]">
          {product.colors.map((color) => (
            <span
              className="h-4 w-4 rounded-full"
              key={color}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </article>
  );
}

export default ShopProductCard;
