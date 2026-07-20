import React, { useEffect } from "react";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import turkishCities from "./turkishCities";

const emptyAddress = {
  title: "",
  name: "",
  surname: "",
  phone: "",
  city: "",
  district: "",
  neighborhood: "",
};

const inputClassName =
  "h-11 w-full rounded-[5px] border border-[#dedede] bg-white px-3 text-sm text-[#252b42] outline-none transition-colors placeholder:text-[#bdbdbd] focus:border-[#23a6f0]";

function AddressForm({ address, onCancel, onSave }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: address || emptyAddress });

  useEffect(() => {
    reset(address || emptyAddress);
  }, [address, reset]);

  const submitAddress = (values) => {
    const payload = {
      title: values.title.trim(),
      name: values.name.trim(),
      surname: values.surname.trim(),
      phone: values.phone.replace(/\s/g, ""),
      city: values.city,
      district: values.district.trim(),
      neighborhood: values.neighborhood.trim(),
    };

    if (address?.id) {
      payload.id = address.id;
    }

    return onSave(payload);
  };

  return (
    <form
      className="rounded-[6px] border border-[#b9dff5] bg-[#f8fcff] p-5 sm:p-6"
      onSubmit={handleSubmit(submitAddress)}
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-base font-bold text-[#252b42]">
          {address ? "Edit Address" : "Add New Address"}
        </h3>
        <button
          aria-label="Close address form"
          className="flex h-8 w-8 items-center justify-center rounded-full text-[#737373] hover:bg-white"
          onClick={onCancel}
          type="button"
        >
          <X aria-hidden="true" size={18} />
        </button>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="text-xs font-bold text-[#737373]">
          Address Title
          <input
            className={`${inputClassName} mt-2`}
            placeholder="Home"
            {...register("title", { required: true })}
          />
          {errors.title && <span className="mt-1 block text-[#e74040]">Required field.</span>}
        </label>
        <label className="text-xs font-bold text-[#737373]">
          Phone
          <input
            className={`${inputClassName} mt-2`}
            placeholder="05XX XXX XX XX"
            type="tel"
            {...register("phone", {
              required: true,
              pattern: /^0?5\d{9}$/,
            })}
          />
          {errors.phone?.type === "required" && <span className="mt-1 block text-[#e74040]">Required field.</span>}
          {errors.phone?.type === "pattern" && <span className="mt-1 block text-[#e74040]">Enter a valid Turkiye phone number.</span>}
        </label>
        <label className="text-xs font-bold text-[#737373]">
          Name
          <input className={`${inputClassName} mt-2`} {...register("name", { required: true })} />
          {errors.name && <span className="mt-1 block text-[#e74040]">Required field.</span>}
        </label>
        <label className="text-xs font-bold text-[#737373]">
          Surname
          <input className={`${inputClassName} mt-2`} {...register("surname", { required: true })} />
          {errors.surname && <span className="mt-1 block text-[#e74040]">Required field.</span>}
        </label>
        <label className="text-xs font-bold text-[#737373]">
          City
          <select className={`${inputClassName} mt-2`} {...register("city", { required: true })}>
            <option value="">Select city</option>
            {turkishCities.map((city) => (
              <option key={city} value={city.toLocaleLowerCase("tr-TR")}>
                {city}
              </option>
            ))}
          </select>
          {errors.city && <span className="mt-1 block text-[#e74040]">Required field.</span>}
        </label>
        <label className="text-xs font-bold text-[#737373]">
          District
          <input className={`${inputClassName} mt-2`} {...register("district", { required: true })} />
          {errors.district && <span className="mt-1 block text-[#e74040]">Required field.</span>}
        </label>
        <label className="text-xs font-bold text-[#737373] sm:col-span-2">
          Neighborhood and Address Details
          <textarea
            className="mt-2 min-h-[96px] w-full resize-y rounded-[5px] border border-[#dedede] bg-white px-3 py-3 text-sm text-[#252b42] outline-none placeholder:text-[#bdbdbd] focus:border-[#23a6f0]"
            placeholder="Neighborhood, street, building and apartment number"
            {...register("neighborhood", { required: true })}
          />
          {errors.neighborhood && <span className="mt-1 block text-[#e74040]">Required field.</span>}
        </label>
      </div>

      <div className="mt-5 flex justify-end gap-3">
        <button
          className="h-10 rounded-[5px] border border-[#dedede] bg-white px-5 text-sm font-bold text-[#737373]"
          onClick={onCancel}
          type="button"
        >
          Cancel
        </button>
        <button
          className="h-10 rounded-[5px] bg-[#23a6f0] px-5 text-sm font-bold text-white hover:bg-[#1689ca]"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? "Saving..." : "Save Address"}
        </button>
      </div>
    </form>
  );
}

export default AddressForm;
