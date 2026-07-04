import React from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

function ShopTitle() {
  return (
    <section className="bg-[#fafafa] font-['Montserrat',ui-sans-serif,system-ui]">
      <div className="mx-auto flex min-h-[92px] max-w-[1050px] flex-col items-center justify-center gap-4 px-6 py-6 md:flex-row md:justify-between md:px-0">
        <h1 className="text-2xl font-bold leading-8 tracking-[0.1px] text-[#252b42]">Shop</h1>
        <div className="flex items-center gap-[15px] text-sm font-bold leading-6 tracking-[0.2px]">
          <NavLink className="text-[#252b42]" exact to="/">
            Home
          </NavLink>
          <ChevronRight aria-hidden="true" className="text-[#bdbdbd]" size={16} strokeWidth={2.5} />
          <span className="text-[#bdbdbd]">Shop</span>
        </div>
      </div>
    </section>
  );
}

export default ShopTitle;
