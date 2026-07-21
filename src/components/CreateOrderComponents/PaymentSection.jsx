import React from "react";
import { Plus, ShieldCheck } from "lucide-react";
import PaymentCard from "./PaymentCard";
import PaymentCardForm from "./PaymentCardForm";

function PaymentSection({
  cards,
  cardCcv,
  editingCard,
  isFormOpen,
  onCancelForm,
  onDelete,
  onEdit,
  onOpenForm,
  onSave,
  selectedCardId,
  setCardCcv,
  setSelectedCardId,
}) {
  const validCards = Array.from(
    new Map(
      cards
        .flat(Infinity)
        .filter(
          (card) =>
            card &&
            typeof card === "object" &&
            !Array.isArray(card) &&
            card.id !== undefined &&
            card.id !== null,
        )
        .map((card) => [String(card.id), card]),
    ).values(),
  );

  return (
    <section className="rounded-[6px] border border-[#ececec] bg-white p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-[#252b42]">Payment Method</h2>
          <p className="mt-1 text-sm text-[#737373]">
            Select a saved card or securely add a new card.
          </p>
        </div>
        <button
          className="inline-flex h-10 items-center gap-2 rounded-[5px] border border-[#23a6f0] px-4 text-sm font-bold text-[#23a6f0] hover:bg-[#f4fbff]"
          onClick={onOpenForm}
          type="button"
        >
          <Plus aria-hidden="true" size={17} />
          Add New Card
        </button>
      </div>

      {isFormOpen && (
        <div className="mt-6">
          <PaymentCardForm card={editingCard} onCancel={onCancelForm} onSave={onSave} />
        </div>
      )}

      {validCards.length > 0 ? (
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {validCards.map((card) => (
            <PaymentCard
              card={card}
              checked={String(selectedCardId) === String(card.id)}
              key={card.id}
              name="payment-card"
              onChange={() => setSelectedCardId(card.id)}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </div>
      ) : (
        !isFormOpen && (
          <div className="mt-6 rounded-[6px] border border-dashed border-[#bdbdbd] px-5 py-10 text-center text-sm text-[#737373]">
            You do not have a saved card yet. Add one to continue.
          </div>
        )
      )}

      <div className="mt-7 flex items-start gap-3 border-t border-[#ececec] pt-6">
        <ShieldCheck aria-hidden="true" className="mt-0.5 shrink-0 text-[#23856d]" size={18} />
        <div>
          <h3 className="text-sm font-bold text-[#252b42]">One-time payment</h3>
          <p className="mt-1 text-xs leading-5 text-[#737373]">
            The selected card will be used for a single payment. Installment options are not available for this order.
          </p>
        </div>
      </div>

      <div className="mt-6 max-w-[220px]">
        <label className="text-xs font-bold text-[#737373]">
          Card Security Code (CCV)
          <input
            aria-describedby="card-ccv-help"
            autoComplete="cc-csc"
            className="mt-2 h-11 w-full rounded-[5px] border border-[#dedede] bg-white px-3 font-mono text-sm text-[#252b42] outline-none transition-colors placeholder:text-[#bdbdbd] focus:border-[#23a6f0]"
            inputMode="numeric"
            maxLength={3}
            onChange={(event) => setCardCcv(event.target.value.replace(/\D/g, ""))}
            placeholder="123"
            type="password"
            value={cardCcv}
          />
        </label>
        <p className="mt-2 text-xs leading-5 text-[#737373]" id="card-ccv-help">
          Enter the 3-digit code on the back of your card. It will not be saved.
        </p>
      </div>
    </section>
  );
}

export default PaymentSection;
