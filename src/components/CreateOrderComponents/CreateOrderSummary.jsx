import React from "react";
import { LockKeyhole } from "lucide-react";

function formatPrice(price) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Number(price) || 0);
}

function CreateOrderSummary({
  activeStep,
  disabled,
  isSubmitting,
  itemCount,
  onContinue,
  subtotal,
}) {
  return (
    <aside className="rounded-[6px] border border-[#ececec] bg-white p-6 xl:sticky xl:top-5">
      <h2 className="text-xl font-bold text-[#252b42]">Order Summary</h2>
      <div className="mt-6 space-y-4 border-b border-[#ececec] pb-6 text-sm">
        <div className="flex justify-between gap-4 text-[#737373]">
          <span>Products ({itemCount})</span>
          <span className="font-bold text-[#252b42]">{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between gap-4 text-[#737373]">
          <span>Shipping</span>
          <span className="font-bold text-[#23856d]">Free</span>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 py-6">
        <span className="font-bold text-[#252b42]">Total</span>
        <span className="text-xl font-bold text-[#23a6f0]">{formatPrice(subtotal)}</span>
      </div>
      <button
        className="h-12 w-full rounded-[5px] bg-[#23a6f0] text-sm font-bold text-white transition-colors hover:bg-[#1689ca] disabled:cursor-not-allowed disabled:bg-[#b9dff5]"
        disabled={disabled}
        onClick={onContinue}
        type="button"
      >
        {activeStep === 1
          ? "Save Address and Continue"
          : isSubmitting
            ? "Creating Order..."
            : "Place Order"}
      </button>
      <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-[#737373]">
        <LockKeyhole aria-hidden="true" size={14} />
        {activeStep === 1
          ? "Continue to choose your payment method."
          : "Your card number and security code are handled securely."}
      </p>
    </aside>
  );
}

export default CreateOrderSummary;
