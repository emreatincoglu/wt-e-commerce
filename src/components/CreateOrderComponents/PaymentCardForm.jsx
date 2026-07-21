import React, { useEffect, useMemo } from "react";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";

const currentYear = new Date().getFullYear();
const emptyCard = {
  card_no: "",
  expire_month: "",
  expire_year: "",
  name_on_card: "",
};

const inputClassName =
  "h-11 w-full rounded-[5px] border border-[#dedede] bg-white px-3 text-sm text-[#252b42] outline-none transition-colors placeholder:text-[#bdbdbd] focus:border-[#23a6f0]";

function PaymentCardForm({ card, onCancel, onSave }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: card || emptyCard });

  useEffect(() => {
    reset(card || emptyCard);
  }, [card, reset]);

  const years = useMemo(() => {
    const firstYear = Math.min(Number(card?.expire_year) || currentYear, currentYear);
    return Array.from({ length: currentYear + 16 - firstYear }, (_, index) => firstYear + index);
  }, [card]);

  const submitCard = (values) => {
    const payload = {
      card_no: values.card_no.replace(/\D/g, ""),
      expire_month: Number(values.expire_month),
      expire_year: Number(values.expire_year),
      name_on_card: values.name_on_card.trim(),
    };

    if (card?.id !== undefined && card?.id !== null) {
      payload.id = card.id;
    }

    return onSave(payload);
  };

  return (
    <form
      className="rounded-[6px] border border-[#b9dff5] bg-[#f8fcff] p-5 sm:p-6"
      onSubmit={handleSubmit(submitCard)}
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-base font-bold text-[#252b42]">
          {card ? "Edit Card" : "Add New Card"}
        </h3>
        <button
          aria-label="Close card form"
          className="flex h-8 w-8 items-center justify-center rounded-full text-[#737373] hover:bg-white"
          onClick={onCancel}
          type="button"
        >
          <X aria-hidden="true" size={18} />
        </button>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="text-xs font-bold text-[#737373] sm:col-span-2">
          Name on Card
          <input
            autoComplete="cc-name"
            className={`${inputClassName} mt-2`}
            placeholder="Name Surname"
            {...register("name_on_card", {
              required: "Required field.",
              minLength: { value: 3, message: "Enter at least 3 characters." },
            })}
          />
          {errors.name_on_card && (
            <span className="mt-1 block text-[#e74040]">{errors.name_on_card.message}</span>
          )}
        </label>

        <label className="text-xs font-bold text-[#737373] sm:col-span-2">
          Card Number
          <input
            autoComplete="cc-number"
            className={`${inputClassName} mt-2 font-mono`}
            inputMode="numeric"
            maxLength={19}
            placeholder="1234 1234 1234 1234"
            {...register("card_no", {
              required: "Required field.",
              validate: (value) =>
                /^\d{16}$/.test(String(value).replace(/\D/g, "")) ||
                "Enter a 16-digit card number.",
            })}
          />
          {errors.card_no && (
            <span className="mt-1 block text-[#e74040]">{errors.card_no.message}</span>
          )}
        </label>

        <label className="text-xs font-bold text-[#737373]">
          Expiry Month
          <select
            autoComplete="cc-exp-month"
            className={`${inputClassName} mt-2`}
            {...register("expire_month", { required: "Required field." })}
          >
            <option value="">Month</option>
            {Array.from({ length: 12 }, (_, index) => index + 1).map((month) => (
              <option key={month} value={month}>
                {String(month).padStart(2, "0")}
              </option>
            ))}
          </select>
          {errors.expire_month && (
            <span className="mt-1 block text-[#e74040]">{errors.expire_month.message}</span>
          )}
        </label>

        <label className="text-xs font-bold text-[#737373]">
          Expiry Year
          <select
            autoComplete="cc-exp-year"
            className={`${inputClassName} mt-2`}
            {...register("expire_year", { required: "Required field." })}
          >
            <option value="">Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          {errors.expire_year && (
            <span className="mt-1 block text-[#e74040]">{errors.expire_year.message}</span>
          )}
        </label>
      </div>

      <div className="mt-5 flex flex-wrap justify-end gap-3">
        <button
          className="h-10 rounded-[5px] border border-[#dedede] bg-white px-5 text-sm font-bold text-[#737373]"
          onClick={onCancel}
          type="button"
        >
          Cancel
        </button>
        <button
          className="h-10 rounded-[5px] bg-[#23a6f0] px-5 text-sm font-bold text-white hover:bg-[#1689ca] disabled:cursor-not-allowed disabled:bg-[#b9dff5]"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? "Saving..." : "Save Card"}
        </button>
      </div>
    </form>
  );
}

export default PaymentCardForm;
