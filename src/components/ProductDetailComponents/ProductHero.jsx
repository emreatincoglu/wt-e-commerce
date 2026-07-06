import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  Heart,
  ShoppingCart,
  Star,
} from "lucide-react";

const products = Array.from({ length: 12 }, (_, index) => ({
  title: "Graphic Design",
  id: `product-${index + 1}`,
  department: "English Department",
  oldPrice: "$16.48",
  price: "$6.48",
  image: `https://picsum.photos/seed/shop-product-${index + 1}/366/476`,
  colors: ["#23a6f0", "#23856d", "#e77c40", "#252b42"],
}));

const productImages = products.map((product) => product.image);

function ProductHero() {
  return (
    <section className="bg-[#fafafa] font-['Montserrat',ui-sans-serif,system-ui]">
      <div className="mx-auto grid max-w-[1050px] gap-[30px] px-6 pb-12 md:grid-cols-[506px_1fr] md:px-0">
        <div>
          <div className="relative h-[450px] overflow-hidden bg-white">
            <img
              alt=""
              className="h-full w-full object-cover"
              src={productImages[0]}
            />
            <button
              aria-label="Previous product image"
              className="absolute left-6 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white"
              type="button"
            >
              <ChevronLeft aria-hidden="true" size={44} strokeWidth={1.8} />
            </button>
            <button
              aria-label="Next product image"
              className="absolute right-6 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white"
              type="button"
            >
              <ChevronRight aria-hidden="true" size={44} strokeWidth={1.8} />
            </button>
          </div>
          <div className="mt-[21px] flex gap-[19px]">
            {productImages.map((image, index) => (
              <button
                aria-label={`Show product image ${index + 1}`}
                className="h-[75px] w-[100px] overflow-hidden border border-transparent first:border-[#23a6f0]"
                key={image}
                type="button"
              >
                <img
                  alt=""
                  className="h-full w-full object-cover"
                  src={image}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="px-0 py-[11px] md:px-6">
          <h1 className="text-xl leading-[30px] tracking-[0.2px] text-[#252b42]">
            Floating Phone
          </h1>
          <div className="mt-3 flex items-center gap-2.5">
            <div className="flex text-[#f3cd03]">
              {Array.from({ length: 5 }, (_, index) => (
                <Star
                  aria-hidden="true"
                  className={index < 4 ? "fill-[#f3cd03]" : ""}
                  key={index}
                  size={22}
                  strokeWidth={1.8}
                />
              ))}
            </div>
            <span className="text-sm font-bold leading-6 tracking-[0.2px] text-[#737373]">
              10 Reviews
            </span>
          </div>

          <p className="mt-5 text-2xl font-bold leading-8 tracking-[0.1px] text-[#252b42]">
            $1,139.33
          </p>
          <p className="mt-[5px] text-sm font-bold leading-6 tracking-[0.2px] text-[#737373]">
            Availability : <span className="text-[#23a6f0]">In Stock</span>
          </p>
          <p className="mt-8 max-w-[464px] text-sm leading-5 tracking-[0.2px] text-[#858585]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>

          <div className="mt-7 h-px max-w-[445px] bg-[#bdbdbd]" />

          <div className="mt-7 flex gap-2.5">
            {["#23a6f0", "#2dc071", "#e77c40", "#252b42"].map((color) => (
              <button
                aria-label={`Select ${color} color`}
                className="h-[30px] w-[30px] rounded-full"
                key={color}
                style={{ backgroundColor: color }}
                type="button"
              />
            ))}
          </div>

          <div className="mt-[67px] flex flex-wrap items-center gap-2.5">
            <button
              className="h-11 rounded-[5px] bg-[#23a6f0] px-5 text-sm font-bold leading-6 tracking-[0.2px] text-white"
              type="button"
            >
              Select Options
            </button>
            {[
              {
                label: "Add to wishlist",
                icon: <Heart aria-hidden="true" size={20} />,
              },
              {
                label: "Add to cart",
                icon: <ShoppingCart aria-hidden="true" size={20} />,
              },
              {
                label: "View product",
                icon: <Eye aria-hidden="true" size={20} />,
              },
            ].map((item) => (
              <button
                aria-label={item.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e8e8e8] bg-white text-[#252b42]"
                key={item.label}
                type="button"
              >
                {item.icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductHero;
