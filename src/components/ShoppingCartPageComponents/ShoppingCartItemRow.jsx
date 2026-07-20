import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import {
  removeCartItem,
  toggleCartItem,
  updateCartItemCount,
} from "../../actions/shoppingCartActions";

function formatPrice(price) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Number(price) || 0);
}

function ShoppingCartItemRow({ item }) {
  const dispatch = useDispatch();
  const { checked, count, product } = item;
  const image = product.images?.[0]?.url || product.images?.[0] || product.images;

  return (
    <div
      className="grid gap-4 border-t border-[#ececec] px-4 py-4 first:border-t-0 sm:px-5 lg:grid-cols-[minmax(260px,1fr)_88px_108px_90px_40px] lg:items-center lg:gap-3 lg:px-5 lg:py-4"
      role="row"
    >
      <div className="flex min-w-0 items-center gap-3" role="cell">
        <input
          aria-label={`Select ${product.name}`}
          checked={checked}
          className="h-5 w-5 shrink-0 cursor-pointer accent-[#23a6f0]"
          onChange={() => dispatch(toggleCartItem(product.id))}
          type="checkbox"
        />
        <div className="h-[84px] w-[68px] shrink-0 overflow-hidden rounded-[4px] border border-[#e6e6e6] bg-[#f7f7f7]">
          {image && (
            <img
              alt={product.name}
              className="h-full w-full object-cover"
              src={image}
            />
          )}
        </div>
        <div className="min-w-0">
          <h2 className="line-clamp-1 text-sm font-bold leading-5 text-[#252b42]">
            {product.name}
          </h2>
          <p className="mt-0.5 line-clamp-1 text-xs leading-5 text-[#737373]">
            {product.description}
          </p>
          <p className="mt-1 text-xs font-bold text-[#23856d]">
            {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between lg:block" role="cell">
        <span className="text-xs font-bold text-[#737373] lg:hidden">Price</span>
        <span className="text-sm font-bold text-[#252b42]">
          {formatPrice(product.price)}
        </span>
      </div>

      <div className="flex items-center justify-between lg:justify-center" role="cell">
        <span className="text-xs font-bold text-[#737373] lg:hidden">Quantity</span>
        <div className="flex h-9 overflow-hidden rounded-[5px] border border-[#dedede] bg-white">
          <button
            aria-label={`Decrease ${product.name} quantity`}
            className="flex w-8 items-center justify-center text-[#737373] transition-colors hover:bg-[#f5f5f5] disabled:cursor-not-allowed disabled:text-[#d5d5d5]"
            disabled={count <= 1}
            onClick={() => dispatch(updateCartItemCount(product.id, count - 1))}
            type="button"
          >
            <Minus aria-hidden="true" size={16} />
          </button>
          <span className="flex w-9 items-center justify-center border-x border-[#dedede] text-sm font-bold text-[#252b42]">
            {count}
          </span>
          <button
            aria-label={`Increase ${product.name} quantity`}
            className="flex w-8 items-center justify-center text-[#23a6f0] transition-colors hover:bg-[#f5faff]"
            onClick={() => dispatch(updateCartItemCount(product.id, count + 1))}
            type="button"
          >
            <Plus aria-hidden="true" size={16} />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between lg:block lg:text-right" role="cell">
        <span className="text-xs font-bold text-[#737373] lg:hidden">Total</span>
        <span className="whitespace-nowrap text-sm font-bold text-[#23a6f0]">
          {formatPrice(product.price * count)}
        </span>
      </div>

      <div className="flex justify-end lg:justify-center" role="cell">
        <button
          aria-label={`Remove ${product.name} from cart`}
          className="flex h-9 w-9 items-center justify-center rounded-full text-[#737373] transition-colors hover:bg-[#fff1f1] hover:text-[#e74040]"
          onClick={() => dispatch(removeCartItem(product.id))}
          type="button"
        >
          <Trash2 aria-hidden="true" size={18} />
        </button>
      </div>
    </div>
  );
}

export default ShoppingCartItemRow;
