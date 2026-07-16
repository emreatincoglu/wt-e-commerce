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
      className="grid gap-5 border-t border-[#ececec] px-5 py-6 first:border-t-0 md:grid-cols-[minmax(330px,1fr)_120px_150px_120px_44px] md:items-center md:px-7"
      role="row"
    >
      <div className="flex min-w-0 items-center gap-4" role="cell">
        <input
          aria-label={`Select ${product.name}`}
          checked={checked}
          className="h-5 w-5 shrink-0 cursor-pointer accent-[#23a6f0]"
          onChange={() => dispatch(toggleCartItem(product.id))}
          type="checkbox"
        />
        <div className="h-[104px] w-[84px] shrink-0 overflow-hidden rounded-[4px] border border-[#e6e6e6] bg-[#f7f7f7]">
          {image && (
            <img
              alt={product.name}
              className="h-full w-full object-cover"
              src={image}
            />
          )}
        </div>
        <div className="min-w-0">
          <h2 className="text-sm font-bold leading-5 text-[#252b42] md:text-base">
            {product.name}
          </h2>
          <p className="mt-1 line-clamp-2 text-xs leading-5 text-[#737373] md:text-sm">
            {product.description}
          </p>
          <p className="mt-2 text-xs font-bold text-[#23856d]">
            {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between md:block" role="cell">
        <span className="text-xs font-bold text-[#737373] md:hidden">Price</span>
        <span className="text-sm font-bold text-[#252b42]">
          {formatPrice(product.price)}
        </span>
      </div>

      <div className="flex items-center justify-between md:justify-center" role="cell">
        <span className="text-xs font-bold text-[#737373] md:hidden">Quantity</span>
        <div className="flex h-10 overflow-hidden rounded-[5px] border border-[#dedede] bg-white">
          <button
            aria-label={`Decrease ${product.name} quantity`}
            className="flex w-10 items-center justify-center text-[#737373] transition-colors hover:bg-[#f5f5f5] disabled:cursor-not-allowed disabled:text-[#d5d5d5]"
            disabled={count <= 1}
            onClick={() => dispatch(updateCartItemCount(product.id, count - 1))}
            type="button"
          >
            <Minus aria-hidden="true" size={16} />
          </button>
          <span className="flex w-11 items-center justify-center border-x border-[#dedede] text-sm font-bold text-[#252b42]">
            {count}
          </span>
          <button
            aria-label={`Increase ${product.name} quantity`}
            className="flex w-10 items-center justify-center text-[#23a6f0] transition-colors hover:bg-[#f5faff]"
            onClick={() => dispatch(updateCartItemCount(product.id, count + 1))}
            type="button"
          >
            <Plus aria-hidden="true" size={16} />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between md:block md:text-right" role="cell">
        <span className="text-xs font-bold text-[#737373] md:hidden">Total</span>
        <span className="text-base font-bold text-[#23a6f0]">
          {formatPrice(product.price * count)}
        </span>
      </div>

      <div className="flex justify-end" role="cell">
        <button
          aria-label={`Remove ${product.name} from cart`}
          className="flex h-10 w-10 items-center justify-center rounded-full text-[#737373] transition-colors hover:bg-[#fff1f1] hover:text-[#e74040]"
          onClick={() => dispatch(removeCartItem(product.id))}
          type="button"
        >
          <Trash2 aria-hidden="true" size={19} />
        </button>
      </div>
    </div>
  );
}

export default ShoppingCartItemRow;
