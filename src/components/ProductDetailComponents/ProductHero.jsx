import React, { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  Heart,
  ShoppingCart,
  Star,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../actions/shoppingCartActions";

function ProductHero() {
  const product = useSelector((store) => store.product.currentProduct);
  const productImages = product.images || [];
  const dispatch = useDispatch();
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);
  }, [product.id]);

  const selectedImage = productImages[activeImage]?.url;


  return (
    <section className="bg-[#fafafa] font-['Montserrat',ui-sans-serif,system-ui]">
      <div className="mx-auto grid max-w-[1050px] gap-[30px] px-5 pb-12 sm:px-6 md:grid-cols-2 lg:grid-cols-[506px_1fr] lg:px-0">
        <div className="min-w-0">
          <div className="relative h-[360px] overflow-hidden bg-white sm:h-[450px]">
            <img
              alt={product.name}
              className="h-full w-full object-cover"
              src={selectedImage}
            />
            {productImages.length > 1 && (
              <button
                aria-label="Previous product image"
                className="absolute left-6 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white"
                onClick={() =>
                  setActiveImage(
                    (activeImage - 1 + productImages.length) %
                      productImages.length,
                  )
                }
                type="button"
              >
                <ChevronLeft aria-hidden="true" size={44} strokeWidth={1.8} />
              </button>
            )}
            {productImages.length > 1 && (
              <button
                aria-label="Next product image"
                className="absolute right-6 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white"
                onClick={() =>
                  setActiveImage((activeImage + 1) % productImages.length)
                }
                type="button"
              >
                <ChevronRight aria-hidden="true" size={44} strokeWidth={1.8} />
              </button>
            )}
          </div>
          <div className="mt-[21px] flex gap-[12px] overflow-x-auto pb-2 sm:gap-[19px]">
            {productImages.map((image, index) => (
              <button
                aria-label={`Show product image ${index + 1}`}
                className={`h-[75px] w-[100px] overflow-hidden border ${
                  index === activeImage
                    ? "border-[#23a6f0]"
                    : "border-transparent"
                }`}
                key={`${image.url}-${index}`}
                onClick={() => setActiveImage(index)}
                type="button"
              >
                <img
                  alt=""
                  className="h-full w-full object-cover"
                  src={image.url}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="px-0 py-[11px] md:px-6">
          <h1 className="text-xl leading-[30px] tracking-[0.2px] text-[#252b42]">
            {product.name}
          </h1>
          <div className="mt-3 flex items-center gap-2.5">
            <div className="flex text-[#f3cd03]">
              {Array.from({ length: 5 }, (_, index) => (
                <Star
                  aria-hidden="true"
                  className={
                    index < Math.round(product.rating) ? "fill-[#f3cd03]" : ""
                  }
                  key={index}
                  size={22}
                  strokeWidth={1.8}
                />
              ))}
            </div>
            <span className="text-sm font-bold leading-6 tracking-[0.2px] text-[#737373]">
             {product.rating}
            </span>
          </div>

          <p className="mt-5 text-2xl font-bold leading-8 tracking-[0.1px] text-[#252b42]">
           $ {Number(product.price).toFixed(2)}
          </p>
          <p className="mt-[5px] text-sm font-bold leading-6 tracking-[0.2px] text-[#737373]">
            Availability : <span className="text-[#23a6f0]">{product.stock} In Stock</span>
          </p>
          <p className="mt-8 max-w-[464px] text-sm leading-5 tracking-[0.2px] text-[#858585]">
            {product.description}
          </p>

          <div className="mt-[67px] flex flex-wrap items-center gap-2.5">
            <button
              className="h-11 rounded-[5px] bg-[#23a6f0] px-5 text-sm font-bold leading-6 tracking-[0.2px] text-white"
              type="button"
            >
              Select Options
            </button>

            <button
                aria-label="Add to wishlist"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e8e8e8] bg-white text-[#252b42]"
                key="addtowishlist"
                type="button"
              >
                <Heart aria-hidden="true" size={20} />
              </button>

              <button
                aria-label="Add to cart"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e8e8e8] bg-white text-[#252b42] cursor-pointer"
                key="addtocart"
                type="button"
                onClick={() => dispatch(setCart(product))}
              >
                <ShoppingCart aria-hidden="true" size={20} />
              </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductHero;
