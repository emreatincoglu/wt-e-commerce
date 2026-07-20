import React from "react";
import { MapPin, Pencil, Phone, Trash2, User } from "lucide-react";

function AddressCard({ address, checked, name, onChange, onDelete, onEdit }) {
  const fullName = [address.name, address.surname].filter(Boolean).join(" ");
  const location = [address.district, address.city].filter(Boolean).join(", ");

  return (
    <label
      className={`relative flex min-h-[168px] cursor-pointer flex-col rounded-[6px] border p-5 transition-colors ${
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
          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-[#252b42]">{address.title}</p>
            <p className="mt-1 flex items-center gap-2 text-xs text-[#737373]">
              <User aria-hidden="true" size={14} />
              <span className="truncate">{fullName}</span>
            </p>
          </div>
        </div>
        <div className="flex shrink-0 items-center">
          <button
            aria-label={`Edit ${address.title}`}
            className="flex h-8 w-8 items-center justify-center rounded-full text-[#737373] hover:bg-white hover:text-[#23a6f0]"
            onClick={(event) => {
              event.preventDefault();
              onEdit(address);
            }}
            type="button"
          >
            <Pencil aria-hidden="true" size={16} />
          </button>
          <button
            aria-label={`Delete ${address.title}`}
            className="flex h-8 w-8 items-center justify-center rounded-full text-[#737373] hover:bg-white hover:text-[#e74040]"
            onClick={(event) => {
              event.preventDefault();
              onDelete(address.id);
            }}
            type="button"
          >
            <Trash2 aria-hidden="true" size={16} />
          </button>
        </div>
      </div>

      <p className="mt-4 flex gap-2 text-xs leading-5 text-[#737373]">
        <MapPin aria-hidden="true" className="mt-0.5 shrink-0" size={14} />
        <span>
          {address.neighborhood || address.address}
          {location && `, ${location}`}
        </span>
      </p>
      <p className="mt-2 flex items-center gap-2 text-xs text-[#737373]">
        <Phone aria-hidden="true" size={14} />
        {address.phone}
      </p>
    </label>
  );
}

export default AddressCard;
