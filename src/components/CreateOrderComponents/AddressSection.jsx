import React from "react";
import { Plus } from "lucide-react";
import AddressCard from "./AddressCard";
import AddressForm from "./AddressForm";

function AddressGrid({ addresses, name, selectedId, onDelete, onEdit, onSelect }) {
  const validAddresses = Array.from(
    new Map(
      addresses
        .flat(Infinity)
        .filter(
          (address) =>
            address &&
            typeof address === "object" &&
            !Array.isArray(address) &&
            address.id !== undefined &&
            address.id !== null,
        )
        .map((address) => [address.id, address]),
    ).values(),
  );

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {validAddresses.map((address) => (
        <AddressCard
          address={address}
          checked={selectedId === address.id}
          key={address.id}
          name={name}
          onChange={() => onSelect(address.id)}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

function AddressSection({
  addresses,
  editingAddress,
  isFormOpen,
  onCancelForm,
  onDelete,
  onEdit,
  onOpenForm,
  onSave,
  sameAsDelivery,
  selectedBillingId,
  selectedDeliveryId,
  setSameAsDelivery,
  setSelectedBillingId,
  setSelectedDeliveryId,
}) {
  return (
    <section className="rounded-[6px] border border-[#ececec] bg-white p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-[#252b42]">Delivery Address</h2>
          <p className="mt-1 text-sm text-[#737373]">Select where your order should be delivered.</p>
        </div>
        <button
          className="inline-flex h-10 items-center gap-2 rounded-[5px] border border-[#23a6f0] px-4 text-sm font-bold text-[#23a6f0] hover:bg-[#f4fbff]"
          onClick={() => onOpenForm(null)}
          type="button"
        >
          <Plus aria-hidden="true" size={17} />
          Add New Address
        </button>
      </div>

      {isFormOpen && (
        <div className="mt-6">
          <AddressForm address={editingAddress} onCancel={onCancelForm} onSave={onSave} />
        </div>
      )}

      {addresses.length > 0 ? (
        <div className="mt-6">
          <AddressGrid
            addresses={addresses}
            name="delivery-address"
            onDelete={onDelete}
            onEdit={onEdit}
            onSelect={setSelectedDeliveryId}
            selectedId={selectedDeliveryId}
          />
        </div>
      ) : (
        !isFormOpen && (
          <div className="mt-6 rounded-[6px] border border-dashed border-[#bdbdbd] px-5 py-10 text-center text-sm text-[#737373]">
            You do not have a saved address yet. Add one to continue.
          </div>
        )
      )}

      <div className="mt-7 border-t border-[#ececec] pt-6">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            checked={sameAsDelivery}
            className="mt-0.5 h-4 w-4 accent-[#23a6f0]"
            onChange={(event) => setSameAsDelivery(event.target.checked)}
            type="checkbox"
          />
          <span>
            <span className="block text-sm font-bold text-[#252b42]">Use delivery address for billing</span>
            <span className="mt-1 block text-xs text-[#737373]">You can choose a different billing address if needed.</span>
          </span>
        </label>

        {!sameAsDelivery && (
          <div className="mt-6">
            <h3 className="mb-4 text-base font-bold text-[#252b42]">Billing Address</h3>
            <AddressGrid
              addresses={addresses}
              name="billing-address"
              onDelete={onDelete}
              onEdit={onEdit}
              onSelect={setSelectedBillingId}
              selectedId={selectedBillingId}
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default AddressSection;
