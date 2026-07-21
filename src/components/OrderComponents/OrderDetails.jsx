import React from "react";

function formatPrice(price) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Number(price) || 0);
}

function getProductImage(product) {
  const firstImage = Array.isArray(product.images)
    ? product.images[0]
    : product.images;

  return firstImage?.url || firstImage || "";
}

function OrderDetails({ products = [] }) {
  if (products.length === 0) {
    return (
      <p className="px-5 py-6 text-sm text-[#737373]">
        Product details are not available for this order.
      </p>
    );
  }

  return (
    <div className="divide-y divide-[#ececec] bg-[#fafafa] px-4 sm:px-6">
      {products.map((product, index) => {
        const image = getProductImage(product);
        const count = Number(product.count) || 0;
        const unitPrice = Number(product.price) || 0;

        return (
          <article
            className="grid gap-4 py-5 sm:grid-cols-[minmax(0,1fr)_80px_110px] sm:items-center"
            key={`${product.id}-${index}`}
          >
            <div className="flex min-w-0 items-center gap-4">
              <div className="h-[76px] w-[62px] shrink-0 overflow-hidden rounded-[4px] border border-[#e6e6e6] bg-white">
                {image && (
                  <img
                    alt={product.name || "Ordered product"}
                    className="h-full w-full object-cover"
                    src={image}
                  />
                )}
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-bold text-[#252b42]">
                  {product.name || `Product #${product.id}`}
                </h3>
                <p className="mt-1 line-clamp-2 text-xs leading-5 text-[#737373]">
                  {product.detail || product.description || "No product detail"}
                </p>
              </div>
            </div>

            <div className="flex justify-between text-sm sm:block sm:text-center">
              <span className="font-bold text-[#737373] sm:hidden">Quantity</span>
              <span className="font-bold text-[#252b42]">{count}</span>
            </div>
            <div className="flex justify-between text-sm sm:block sm:text-right">
              <span className="font-bold text-[#737373] sm:hidden">Line total</span>
              <span className="font-bold text-[#23a6f0]">
                {formatPrice(unitPrice * count)}
              </span>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default OrderDetails;
