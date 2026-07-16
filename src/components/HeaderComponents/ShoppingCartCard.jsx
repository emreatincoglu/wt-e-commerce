import React from "react";

function formatPrice(price) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Number(price) || 0);
}

function ShoppingCartCard({ item }) {
  const { count, product } = item;
  const image = product.images?.[0]?.url || product.images?.[0] || product.images;

  return (
    <article className="flex gap-4 border-b border-[#ececec] px-5 py-4 last:border-b-0">
      <div className="h-[88px] w-[72px] shrink-0 overflow-hidden rounded-[4px] border border-[#ececec] bg-[#f7f7f7]">
        {image && (
          <img
            alt={product.name}
            className="h-full w-full object-cover"
            src={image}
          />
        )}
      </div>

      <div className="min-w-0 flex-1 text-left">
        <h3 className="line-clamp-2 text-sm font-bold leading-5 text-[#252b42]">
          {product.name}
        </h3>
        <p className="mt-1 line-clamp-1 text-xs leading-5 text-[#737373]">
          {product.description}
        </p>
        <p className="mt-1 text-xs text-[#a0a0a0]">Quantity: {count}</p>
        <p className="mt-1 text-sm font-bold text-[#23a6f0]">
          {formatPrice(product.price * count)}
        </p>
      </div>
    </article>
  );
}

export default ShoppingCartCard;
