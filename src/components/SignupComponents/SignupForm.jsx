import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { getRoles } from "../../actions/clientActions";
import axiosInstance from "../../api/axiosInstance";

const inputClassName =
  "w-full rounded-full border border-slate-200 bg-slate-50 px-6 py-3.5 text-sm text-slate-700 placeholder-slate-400 transition-colors focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500";

function isValidTurkishPhone(value = "") {
  const digits = value.replace(/\D/g, "");

  if (digits.length === 10) {
    return digits.startsWith("5");
  }

  if (digits.length === 11) {
    return digits.startsWith("05");
  }

  if (digits.length === 12) {
    return digits.startsWith("905");
  }

  return false;
}

function isValidIban(value = "") {
  const iban = value.replace(/\s/g, "").toUpperCase();

  if (!/^TR\d{24}$/.test(iban)) {
    return false;
  }

  const rearranged = iban.slice(4) + iban.slice(0, 4);
  const numeric = rearranged.replace(/[A-Z]/g, (char) =>
    String(char.charCodeAt(0) - 55),
  );
  let remainder = 0;

  for (const digit of numeric) {
    remainder = (remainder * 10 + Number(digit)) % 97;
  }

  return remainder === 1;
}

function FieldError({ children }) {
  return <p className="ml-4 mt-1 text-xs text-red-500">{children}</p>;
}

function SignupForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role_id: "",
      store: {
        name: "",
        phone: "",
        tax_no: "",
        bank_account: "",
      },
    },
    mode: "onChange",
    shouldUnregister: true,
  });

  const dispatch = useDispatch();

  const roles = useSelector((state) => state.client.roles);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  useEffect(() => {
    dispatch(getRoles());
  }, []);


  const selectedRoleId = watch("role_id");
  const selectedRole = useMemo(
    () => roles.find((role) => String(role.id) === String(selectedRoleId)),
    [roles, selectedRoleId],
  );
  const isStoreRoleSelected =
    selectedRole?.name?.toLocaleLowerCase("tr-TR").includes("store") ||
    selectedRole?.name?.toLocaleLowerCase("tr-TR").includes("mağaza") ||
    selectedRole?.name?.toLocaleLowerCase("tr-TR").includes("magaza") ||
    String(selectedRoleId) === "2";

  const buildPayload = (data) => {
    const payload = {
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: parseInt(data.role_id, 10),
    };

    if (isStoreRoleSelected) {
      payload.store = {
        name: data.store.name,
        phone: data.store.phone.replace(/\s/g, ""),
        tax_no: data.store.tax_no.toUpperCase(),
        bank_account: data.store.bank_account.replace(/\s/g, "").toUpperCase(),
      };
    }

    return payload;
  };

  const onSubmit = (data) => {
    const payload = buildPayload(data);

    setLoading(true);

    axiosInstance
      .post("/signup", payload)
      .then((response) => {
        console.log("Signup successful:", response.data);
        toast.success(
          "Signup successful. Please click the link in your email to activate your account.",
        );
        reset();
        history.push("/");
      })
      .catch((error) => {
        console.error("Signup error:", error);
        toast.error("Signup failed. Please check your information.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-6 rounded-[16px] bg-white p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:space-y-7 sm:p-10"
      >
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="name"
            className="ml-4 text-sm font-medium text-slate-500"
          >
            Name *
          </label>
          <input
            id="name"
            placeholder="Name *"
            type="text"
            {...register("name", { required: true, minLength: 3 })}
            className={inputClassName}
          />
          {errors.name?.type === "required" && (
            <FieldError>Name is required.</FieldError>
          )}
          {errors.name?.type === "minLength" && (
            <FieldError>Name must be at least 3 characters long.</FieldError>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="email"
            className="ml-4 text-sm font-medium text-slate-500"
          >
            Email address *
          </label>
          <input
            id="email"
            placeholder="Email *"
            type="email"
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
            className={inputClassName}
          />
          {errors.email?.type === "required" && (
            <FieldError>Email is required.</FieldError>
          )}
          {errors.email?.type === "pattern" && (
            <FieldError>Please enter a valid email address.</FieldError>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="password"
            className="ml-4 text-sm font-medium text-slate-500"
          >
            Password *
          </label>
          <input
            id="password"
            placeholder="Password *"
            type="password"
            {...register("password", {
              required: true,
              minLength: 8,
              pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).+$/,
            })}
            className={inputClassName}
          />
          {errors.password?.type === "required" && (
            <FieldError>Password is required.</FieldError>
          )}
          {errors.password?.type === "minLength" && (
            <FieldError>
              Password must be at least 8 characters long.
            </FieldError>
          )}
          {errors.password?.type === "pattern" && (
            <FieldError>
              Password must contain at least one uppercase letter, one digit,
              and one special character.
            </FieldError>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="role_id"
            className="ml-4 text-sm font-medium text-slate-500"
          >
            Roles *
          </label>
          <select
            id="role_id"
            {...register("role_id", { required: true })}
            className="w-full appearance-none rounded-full border border-slate-200 bg-slate-50 px-6 py-3.5 text-sm text-slate-700 transition-colors focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
        </div>

        {isStoreRoleSelected && (
          <div className="space-y-7">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="store-name"
                className="ml-4 text-sm font-medium text-slate-500"
              >
                Store Name *
              </label>
              <input
                id="store-name"
                placeholder="Store Name *"
                type="text"
                {...register("store.name", { required: true, minLength: 3 })}
                className={inputClassName}
              />
              {errors.store?.name?.type === "required" && (
                <FieldError>Store Name is required.</FieldError>
              )}
              {errors.store?.name?.type === "minLength" && (
                <FieldError>
                  Store Name must be at least 3 characters long.
                </FieldError>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="store-phone"
                className="ml-4 text-sm font-medium text-slate-500"
              >
                Store Phone *
              </label>
              <input
                id="store-phone"
                placeholder="+90 5XX XXX XX XX"
                type="tel"
                {...register("store.phone", {
                  required: true,
                  validate: (value) => isValidTurkishPhone(value),
                })}
                className={inputClassName}
              />
              {errors.store?.phone?.type === "required" && (
                <FieldError>Store Phone is required.</FieldError>
              )}
              {errors.store?.phone?.type === "validate" && (
                <FieldError>
                  Please enter a valid Türkiye phone number.
                </FieldError>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="store-tax-no"
                className="ml-4 text-sm font-medium text-slate-500"
              >
                Store Tax ID *
              </label>
              <input
                id="store-tax-no"
                placeholder="T1234V123456"
                type="text"
                {...register("store.tax_no", {
                  required: true,
                  pattern: /^T\d{4}V\d{6}$/i,
                })}
                className={inputClassName}
              />
              {errors.store?.tax_no?.type === "required" && (
                <FieldError>Store Tax ID is required.</FieldError>
              )}
              {errors.store?.tax_no?.type === "pattern" && (
                <FieldError>Store Tax ID must match TXXXXVXXXXXX.</FieldError>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="store-bank-account"
                className="ml-4 text-sm font-medium text-slate-500"
              >
                Store Bank Account *
              </label>
              <input
                id="store-bank-account"
                placeholder="TR00 0000 0000 0000 0000 0000 00"
                type="text"
                {...register("store.bank_account", {
                  required: true,
                  validate: (value) => isValidIban(value),
                })}
                className={inputClassName}
              />
              {errors.store?.bank_account?.type === "required" && (
                <FieldError>Store Bank Account is required.</FieldError>
              )}
              {errors.store?.bank_account?.type === "validate" && (
                <FieldError>
                  Please enter a valid Türkiye IBAN address.
                </FieldError>
              )}
            </div>

            <p className="ml-4 mt-1 text-xs text-slate-400">
              You have selected the Store role.
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={loading || !isValid}
          className="mt-1 w-full rounded-full bg-sky-400 px-6 py-2 text-sm font-medium text-white transition-transform hover:bg-sky-500 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Loading..." : "Gönder"}
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
