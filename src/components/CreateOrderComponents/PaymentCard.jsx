import React from "react";
import { CreditCard, Pencil, Trash2, User } from "lucide-react";

function maskCardNumber(cardNumber) {
  const digits = String(cardNumber || "").replace(/\D/g, "");
  return `**** **** **** ${digits.slice(-4).padStart(4, "*")}`;
}

function PaymentCard({ card, checked, name, onChange, onDelete, onEdit }) {
  const month = String(card.expire_month || "").padStart(2, "0");

  return (
    <label
      className={`relative flex min-h-[164px] cursor-pointer flex-col rounded-[6px] border p-5 transition-colors ${
        checked
          ? "border-[#23a6f0] bg-[#f4fbff]"
          : "border-[#e6e6e6] bg-white hover:border-[#b9dff5]"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <input
            checked={checked}
            className="h-4 w-4 shrink-0 accent-[#23a6f0]"
            name={name}
            onChange={onChange}
            type="radio"
          />
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[5px] bg-white text-[#23a6f0] shadow-sm">
            <CreditCard aria-hidden="true" size={19} />
          </span>
        </div>

        <div className="flex shrink-0 items-center">
          <button
            aria-label="Edit card"
            className="flex h-8 w-8 items-center justify-center rounded-full text-[#737373] hover:bg-white hover:text-[#23a6f0]"
            onClick={(event) => {
              event.preventDefault();
              onEdit(card);
            }}
            type="button"
          >
            <Pencil aria-hidden="true" size={16} />
          </button>
          <button
            aria-label="Delete card"
            className="flex h-8 w-8 items-center justify-center rounded-full text-[#737373] hover:bg-white hover:text-[#e74040]"
            onClick={(event) => {
              event.preventDefault();
              onDelete(card.id);
            }}
            type="button"
          >
            <Trash2 aria-hidden="true" size={16} />
          </button>
        </div>
      </div>

      <p className="mt-5 font-mono text-base font-bold text-[#252b42]">
        {maskCardNumber(card.card_no)}
      </p>
      <div className="mt-auto flex items-end justify-between gap-4 pt-4 text-xs text-[#737373]">
        <p className="flex min-w-0 items-center gap-2">
          <User aria-hidden="true" className="shrink-0" size={14} />
          <span className="truncate">{card.name_on_card}</span>
        </p>
        <p className="shrink-0 font-bold text-[#252b42]">
          {month}/{card.expire_year}
        </p>
      </div>
    </label>
  );
}

export default PaymentCard;
