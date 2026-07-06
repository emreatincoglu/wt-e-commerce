import React from "react";
import ShopProductCard from "../ShopPageComponents/ShopProductCard";

const products = Array.from({ length: 12 }, (_, index) => ({
  title: "Graphic Design",
  id: `product-${index + 1}`,
  department: "English Department",
  oldPrice: "$16.48",
  price: "$6.48",
  image: `https://picsum.photos/seed/shop-product-${index + 1}/366/476`,
  colors: ["#23a6f0", "#23856d", "#e77c40", "#252b42"],
}));

function BestsellerProducts() {
  return (
    <section className="bg-[#fafafa] font-['Montserrat',ui-sans-serif,system-ui]">
      <div className="mx-auto max-w-[1050px] px-6 py-12 md:px-0">
        <h2 className="border-b border-[#ececec] pb-6 text-2xl font-bold leading-8 tracking-[0.1px] text-[#252b42]">
          BESTSELLER PRODUCTS
        </h2>
        <div className="mt-6 grid gap-[30px] sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <ShopProductCard
              key={`${product.title}-${index}`}
              product={product}
              id={product.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BestsellerProducts;
