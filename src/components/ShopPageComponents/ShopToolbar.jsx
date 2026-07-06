import React from "react";
import { Grid3X3, List } from "lucide-react";

function ShopToolbar() {
  return (
    <section className="bg-white font-['Montserrat',ui-sans-serif,system-ui]">
      <div className="mx-auto flex min-h-[98px] max-w-[1050px] flex-col items-center justify-between gap-6 px-6 py-6 md:flex-row md:px-0">
        <p className="text-sm font-bold leading-6 tracking-[0.2px] text-[#737373]">
          Showing all 12 results
        </p>

        <div className="flex items-center gap-[15px]">
          <span className="text-sm font-bold leading-6 tracking-[0.2px] text-[#737373]">
            Views:
          </span>
          <button
            aria-label="Grid view"
            className="flex h-[46px] w-[46px] items-center justify-center rounded-[5px] border border-[#ececec] text-[#252b42]"
            type="button"
          >
            <Grid3X3 aria-hidden="true" size={16} />
          </button>
          <button
            aria-label="List view"
            className="flex h-[46px] w-[46px] items-center justify-center rounded-[5px] border border-[#ececec] text-[#737373]"
            type="button"
          >
            <List aria-hidden="true" size={16} />
          </button>
        </div>

        <div className="flex items-center gap-[15px]">
          <select
            aria-label="Sort products"
            className="h-[50px] w-[141px] rounded-[5px] border border-[#ddd] bg-[#f9f9f9] px-[18px] text-sm leading-7 tracking-[0.2px] text-[#737373] outline-none"
            defaultValue="popularity"
          >
            <option value="popularity">Popularity</option>
            <option value="newest">Newest</option>
            <option value="price-low">Price: low</option>
          </select>
          <button
            className="h-[50px] rounded-[5px] bg-[#23a6f0] px-5 text-sm font-bold leading-7 tracking-[0.2px] text-white"
            type="button"
          >
            Filter
          </button>
        </div>
      </div>
    </section>
  );
}

export default ShopToolbar;
