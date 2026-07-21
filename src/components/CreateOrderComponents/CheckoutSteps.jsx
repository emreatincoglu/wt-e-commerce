import React from "react";
import { CreditCard, MapPin } from "lucide-react";

function CheckoutSteps({ activeStep, canOpenPayment, onStepChange }) {
  return (
    <div className="grid overflow-hidden rounded-[6px] border border-[#ececec] bg-white sm:grid-cols-2">
      <button
        className={`relative flex min-h-[112px] items-center gap-4 border-b-4 px-5 py-5 text-left sm:border-r sm:px-6 ${
          activeStep === 1
            ? "border-b-[#23a6f0] bg-white"
            : "border-b-transparent bg-[#fafafa]"
        }`}
        onClick={() => onStepChange(1)}
        type="button"
      >
        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${activeStep === 1 ? "bg-[#23a6f0] text-white" : "border border-[#d9d9d9] bg-white text-[#737373]"}`}>
          <MapPin aria-hidden="true" size={20} />
        </span>
        <div>
          <p className={`text-xs font-bold uppercase ${activeStep === 1 ? "text-[#23a6f0]" : "text-[#737373]"}`}>Step 1</p>
          <h1 className="mt-1 text-lg font-bold text-[#252b42]">Address Information</h1>
          <p className="mt-1 text-xs text-[#737373]">Choose your delivery and billing address.</p>
        </div>
      </button>

      <button
        className={`flex min-h-[112px] items-center gap-4 border-b-4 px-5 py-5 text-left sm:px-6 ${
          activeStep === 2
            ? "border-b-[#23a6f0] bg-white text-[#252b42]"
            : "border-b-transparent bg-[#fafafa] text-[#a0a0a0]"
        } disabled:cursor-not-allowed`}
        disabled={!canOpenPayment}
        onClick={() => onStepChange(2)}
        type="button"
      >
        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${activeStep === 2 ? "bg-[#23a6f0] text-white" : "border border-[#d9d9d9] bg-white"}`}>
          <CreditCard aria-hidden="true" size={20} />
        </span>
        <div>
          <p className={`text-xs font-bold uppercase ${activeStep === 2 ? "text-[#23a6f0]" : ""}`}>Step 2</p>
          <h2 className="mt-1 text-lg font-bold">Payment Options</h2>
          <p className="mt-1 text-xs">Choose a saved card or add a new one.</p>
        </div>
      </button>
    </div>
  );
}

export default CheckoutSteps;
