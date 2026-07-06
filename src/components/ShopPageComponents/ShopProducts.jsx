import React from "react";
import ShopProductCard from "./ShopProductCard";

const products = Array.from({ length: 12 }, (_, index) => ({
  title: "Graphic Design",
  id: `product-${index + 1}`,
  department: "English Department",
  oldPrice: "$16.48",
  price: "$6.48",
  image: `https://picsum.photos/seed/shop-product-${index + 1}/366/476`,
  colors: ["#23a6f0", "#23856d", "#e77c40", "#252b42"],
}));

function ShopProducts() {
  return (
    <section className="bg-white font-['Montserrat',ui-sans-serif,system-ui]">
      <div className="mx-auto max-w-[1050px] px-6 pb-12 md:px-0">
        <div className="grid gap-x-[30px] gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <ShopProductCard
              key={`${product.title}-${index}`}
              product={product}
              id={product.id}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="flex overflow-hidden rounded-[6px] border border-[#bdbdbd] text-sm font-bold leading-6 tracking-[0.2px]">
            <button
              className="bg-[#f3f3f3] px-[15px] py-[20px] text-[#bdbdbd]"
              type="button"
            >
              First
            </button>
            <button
              className="border-l border-[#bdbdbd] px-3 py-[20px] text-[#23a6f0]"
              type="button"
            >
              1
            </button>
            <button
              className="bg-[#23a6f0] px-3 py-[20px] text-white"
              type="button"
            >
              2
            </button>
            <button
              className="border-l border-[#bdbdbd] px-3 py-[20px] text-[#23a6f0]"
              type="button"
            >
              3
            </button>
            <button
              className="border-l border-[#bdbdbd] px-[15px] py-[20px] text-[#23a6f0]"
              type="button"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopProducts;
