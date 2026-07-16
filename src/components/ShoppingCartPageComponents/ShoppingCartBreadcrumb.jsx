import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";

function ShoppingCartBreadcrumb() {
  const history = useHistory();

  return (
    <section className="bg-[#fafafa] font-['Montserrat',ui-sans-serif,system-ui]">
      <div className="mx-auto flex min-h-[92px] max-w-[1050px] items-center gap-6 px-6 md:px-0">
        <button
          aria-label="Go back"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#e8e8e8] bg-white text-[#252b42] transition-colors hover:border-[#23a6f0] hover:text-[#23a6f0]"
          onClick={() => history.goBack()}
          type="button"
        >
          <ArrowLeft aria-hidden="true" size={20} />
        </button>
        <div className="flex items-center gap-[15px] text-sm font-bold leading-6 tracking-[0.2px]">
          <NavLink className="text-[#252b42]" exact to="/">
            Home
          </NavLink>
          <ChevronRight
            aria-hidden="true"
            className="text-[#bdbdbd]"
            size={16}
            strokeWidth={2.5}
          />
          <span className="text-[#bdbdbd]">Cart Page</span>
        </div>
      </div>
    </section>
  );
}

export default ShoppingCartBreadcrumb;
