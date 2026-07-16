import React, { useMemo } from "react";
import { ChevronRight, ShieldCheck, Truck } from "lucide-react";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import ShoppingCartTable from "../components/ShoppingCartPageComponents/ShoppingCartTable";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

function formatPrice(price) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Number(price) || 0);
}

function ShoppingCartPage() {
  const cartItems = useSelector((store) => store.shoppingCart.cart);
  const history = useHistory();

  const selectedItems = cartItems.filter((item) => item.checked);
  const itemCount = cartItems.reduce((total, item) => total + item.count, 0);
  const subtotal = useMemo(
    () =>
      selectedItems.reduce(
        (total, item) => total + item.product.price * item.count,
        0,
      ),
    [selectedItems],
  );
  const shipping = subtotal > 0 ? 0 : 0;

  return (
    <div className="min-h-screen bg-white font-['Montserrat',ui-sans-serif,system-ui]">
      <Header />
      <main>
        <section className="border-y border-[#f0f0f0] bg-[#fafafa]">
          <div className="mx-auto flex min-h-[92px] max-w-[1050px] items-center gap-3 px-6 text-sm font-bold md:px-0">
            <NavLink className="text-[#252b42]" exact to="/">
              Home
            </NavLink>
            <ChevronRight aria-hidden="true" className="text-[#bdbdbd]" size={16} />
            <span className="text-[#737373]">Shopping Cart</span>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 py-10 md:px-8 md:py-14">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h1 className="text-3xl font-bold text-[#252b42]">Shopping Cart</h1>
              <p className="mt-2 text-sm text-[#737373]">
                {itemCount} {itemCount === 1 ? "item" : "items"} in your cart
              </p>
            </div>
            <button
              className="text-sm font-bold text-[#23a6f0] hover:text-[#1689ca]"
              onClick={() => history.push("/shop")}
              type="button"
            >
              Continue Shopping
            </button>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
            <ShoppingCartTable cartItems={cartItems} />

            <aside className="rounded-[6px] border border-[#ececec] bg-white p-6">
              <h2 className="text-xl font-bold text-[#252b42]">Order Summary</h2>
              <div className="mt-6 space-y-4 border-b border-[#ececec] pb-6 text-sm">
                <div className="flex justify-between gap-4 text-[#737373]">
                  <span>Subtotal</span>
                  <span className="font-bold text-[#252b42]">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between gap-4 text-[#737373]">
                  <span>Shipping</span>
                  <span className="font-bold text-[#23856d]">
                    {shipping === 0 ? "Free" : formatPrice(shipping)}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between gap-4 py-6">
                <span className="font-bold text-[#252b42]">Order Total</span>
                <span className="text-xl font-bold text-[#23a6f0]">
                  {formatPrice(subtotal + shipping)}
                </span>
              </div>
              <button
                className="h-12 w-full rounded-[5px] bg-[#23a6f0] text-sm font-bold text-white transition-colors hover:bg-[#1689ca] disabled:cursor-not-allowed disabled:bg-[#b9dff5]"
                disabled={selectedItems.length === 0}
                onClick={() => history.push("/checkout")}
                type="button"
              >
                Proceed to Checkout
              </button>

              <div className="mt-6 space-y-3 border-t border-[#ececec] pt-5 text-xs font-bold text-[#737373]">
                <p className="flex items-center gap-3">
                  <Truck aria-hidden="true" className="text-[#23856d]" size={18} />
                  Free shipping on selected products
                </p>
                <p className="flex items-center gap-3">
                  <ShieldCheck aria-hidden="true" className="text-[#23856d]" size={18} />
                  Secure checkout
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ShoppingCartPage;
