import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, setLoading } from "../../actions/clientActions";

const inputClassName =
  "w-full rounded-full border border-slate-200 bg-slate-50 px-6 py-3.5 text-sm text-slate-700 placeholder-slate-400 transition-colors focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500";

function FieldError({ children }) {
  return <p className="ml-4 mt-1 text-xs text-red-500">{children}</p>;
}

function LoginForm() {
  const {
    register,
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    mode: "onChange",
  });

  const dispatch = useDispatch();

  const loading = useSelector((state) => state.client.loading);

  const history = useHistory();

  const buildPayload = (data) => {
    const payload = {
      email: data.email,
      password: data.password,
    };
    return payload;
  };

  const onSubmit = (data) => {
    const payload = buildPayload(data);

    dispatch(setLoading(true));

    dispatch(loginUser(payload, history, data.rememberMe));
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-7 rounded-[2rem] bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-10"
      >
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
            })}
            className={inputClassName}
          />
          {errors.password?.type === "required" && (
            <FieldError>Password is required.</FieldError>
          )}
        </div>

        <div>
          <Controller
            name="rememberMe"
            control={control}
            render={({ field }) => (
              <input
                id="rememberMe"
                type="checkbox"
                checked={field.value}
                onChange={(event) => field.onChange(event.target.checked)}
                onBlur={field.onBlur}
                name={field.name}
                ref={field.ref}
              />
            )}
          />
          <label htmlFor="rememberMe" className="ml-4 text-sm font-medium text-slate-500">Remember me</label>
        </div>

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

export default LoginForm;
