import React from "react";
import { ShoppingBag } from "lucide-react";
import ShoppingCartItemRow from "./ShoppingCartItemRow";

function ShoppingCartTable({ cartItems }) {
  if (cartItems.length === 0) {
    return (
      <div className="grid min-h-[360px] place-items-center border border-[#ececec] bg-white px-6 text-center">
        <div>
          <ShoppingBag
            aria-hidden="true"
            className="mx-auto text-[#23a6f0]"
            size={46}
            strokeWidth={1.6}
          />
          <h2 className="mt-5 text-xl font-bold text-[#252b42]">
            Your cart is empty
          </h2>
          <p className="mt-2 text-sm text-[#737373]">
            Products you add to your cart will appear here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      aria-label="Shopping cart items"
      className="min-w-0 overflow-hidden rounded-[6px] border border-[#ececec] bg-white"
      role="table"
    >
      <div
        className="hidden min-h-12 grid-cols-[minmax(260px,1fr)_88px_108px_90px_40px] items-center gap-3 bg-[#fafafa] px-5 text-xs font-bold uppercase text-[#737373] lg:grid"
        role="row"
      >
        <div role="columnheader">Product</div>
        <div role="columnheader">Price</div>
        <div className="text-center" role="columnheader">Quantity</div>
        <div className="text-right" role="columnheader">Total</div>
        <div className="text-center" role="columnheader">Remove</div>
      </div>

      <div role="rowgroup">
        {cartItems.map((item) => (
          <ShoppingCartItemRow item={item} key={item.product.id} />
        ))}
      </div>
    </div>
  );
}

export default ShoppingCartTable;
