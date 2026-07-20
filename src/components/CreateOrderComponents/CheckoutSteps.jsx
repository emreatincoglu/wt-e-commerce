import React from "react";
import { CreditCard, MapPin } from "lucide-react";

function CheckoutSteps() {
  return (
    <div className="grid overflow-hidden rounded-[6px] border border-[#ececec] bg-white sm:grid-cols-2">
      <div className="relative flex min-h-[112px] items-center gap-4 border-b-4 border-[#23a6f0] px-5 py-5 sm:border-b-4 sm:border-r sm:px-6">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#23a6f0] text-white">
          <MapPin aria-hidden="true" size={20} />
        </span>
        <div>
          <p className="text-xs font-bold uppercase text-[#23a6f0]">Step 1</p>
          <h1 className="mt-1 text-lg font-bold text-[#252b42]">Address Information</h1>
          <p className="mt-1 text-xs text-[#737373]">Choose your delivery and billing address.</p>
        </div>
      </div>

      <div className="flex min-h-[108px] items-center gap-4 bg-[#fafafa] px-5 py-5 text-[#a0a0a0] sm:px-6">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d9d9d9] bg-white">
          <CreditCard aria-hidden="true" size={20} />
        </span>
        <div>
          <p className="text-xs font-bold uppercase">Step 2</p>
          <h2 className="mt-1 text-lg font-bold">Payment Options</h2>
          <p className="mt-1 text-xs">This step will be available later.</p>
        </div>
      </div>
    </div>
  );
}

export default CheckoutSteps;
