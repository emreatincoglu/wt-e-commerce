import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ShoppingCartCard from "./ShoppingCartCard";

function ShoppingCartDropdown({ mobile = false }) {
  const cartItems = useSelector((store) => store.shoppingCart.cart);
  const history = useHistory();
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const itemCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.count, 0),
    [cartItems],
  );

  useEffect(() => {
    const closeOnOutsideClick = (event) => {
      if (!dropdownRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const goTo = (path) => {
    setIsOpen(false);
    history.push(path);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-label={`Cart with ${itemCount} items`}
        className={
          mobile
            ? "relative flex items-center justify-center text-[#252b42]"
            : "flex items-center gap-[5px] rounded-[37px] p-[15px] text-[#23a6f0] transition-colors hover:bg-[#f5faff]"
        }
        onClick={() => setIsOpen((open) => !open)}
        type="button"
      >
        <ShoppingCart aria-hidden="true" size={mobile ? 24 : 18} strokeWidth={2.2} />
        {mobile ? (
          itemCount > 0 && (
            <span className="absolute -right-2 -top-2 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#e77c22] px-1 text-[10px] font-bold text-white">
              {itemCount}
            </span>
          )
        ) : (
          <>
            <span className="text-xs leading-4 tracking-[0.2px]">{itemCount}</span>
            <ChevronDown
              aria-hidden="true"
              className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
              size={14}
              strokeWidth={2.2}
            />
          </>
        )}
      </button>

      {isOpen && (
        <div
          aria-label="Shopping cart"
          className="absolute right-0 top-[calc(100%+10px)] z-50 w-[min(390px,calc(100vw-24px))] overflow-hidden rounded-[6px] border border-[#ececec] bg-white text-[#252b42] shadow-[0_12px_30px_rgba(0,0,0,0.16)]"
          role="dialog"
        >
          <div className="border-b border-[#ececec] px-5 py-4 text-left text-base font-bold">
            My Cart ({itemCount} {itemCount === 1 ? "Item" : "Items"})
          </div>

          <div className="max-h-[360px] overflow-y-auto">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <ShoppingCartCard item={item} key={item.product.id} />
              ))
            ) : (
              <div className="flex min-h-[150px] flex-col items-center justify-center gap-3 px-6 text-center text-sm text-[#737373]">
                <ShoppingCart aria-hidden="true" size={30} strokeWidth={1.7} />
                <p>Your cart is empty.</p>
              </div>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="grid grid-cols-2 gap-3 border-t border-[#ececec] bg-white px-5 py-4">
              <button
                className="h-11 rounded-[5px] border border-[#d9d9d9] bg-white text-sm font-bold text-[#252b42] transition-colors hover:bg-[#f7f7f7] cursor-pointer"
                onClick={() => goTo("/cart")}
                type="button"
              >
                View Cart
              </button>
              
              <button
                className="h-11 rounded-[5px] bg-[#2aa7f0] text-sm font-bold text-white transition-colors hover:bg-[#18a3f3] cursor-pointer"
                onClick={() => goTo("/checkout")}
                type="button"
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ShoppingCartDropdown;
