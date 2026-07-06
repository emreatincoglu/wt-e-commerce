import React from "react";
import { NavLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";

function ProductBreadcrumb() {
  return (
    <section className="bg-[#fafafa] font-['Montserrat',ui-sans-serif,system-ui]">
      <div className="mx-auto flex min-h-[92px] max-w-[1050px] items-center px-6 md:px-0">
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
          <span className="text-[#bdbdbd]">Shop</span>
        </div>
      </div>
    </section>
  );
}

export default ProductBreadcrumb;
