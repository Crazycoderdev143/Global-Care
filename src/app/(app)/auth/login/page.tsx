"use client";

import {z} from "zod";
import Link from "next/link";
import {useState} from "react";
import {motion} from "framer-motion";
import {useRouter} from "next/navigation";
import {signin} from "@/services/authServices";
import {logout, login} from "@/redux/Slices/userSlice";
import AuthButton from "@/components/ui/authProviders";
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {signInValidation} from "../../../../typeValidations/signInSchema";

type SigninFormData = z.infer<typeof signInValidation>;

const initialData: SigninFormData = {
  emailOrUsername: "",
  password: "",
  OTP: "",
  rememberMe: false,
};
export default function SigninForm() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [otp, setOtp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<SigninFormData>(initialData);
  const [errors, setErrors] = useState<
    Partial<Record<keyof SigninFormData, string>>
  >({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value, type, checked} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({...prev, [name]: undefined}));
  };

  const mapZodErrors = (issues: z.ZodIssue[]) => {
    return issues.reduce(
      (acc, issue) => {
        const field = issue.path[0] as keyof SigninFormData;
        acc[field] = issue.message;
        return acc;
      },
      {} as Partial<Record<keyof SigninFormData, string>>
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("formData", formData);

    const parsed = signInValidation.safeParse(formData);
    if (!parsed.success) {
      setErrors(mapZodErrors(parsed.error.errors));
      return;
    }
    console.log("parsed", parsed);

    setLoading(true);

    try {
      const res = await signin(parsed.data);
      console.log("res", res);

      if (!res.success) return dispatch(logout());

      if (res.otp && !otp) return setOtp(true); // Show OTP if required

      dispatch(login(res.user));
      router.push("/");
      setOtp(false);
    } catch (err) {
      console.error("Sign in failed", err);
      dispatch(logout());
    } finally {
      setLoading(false);
    }
  };
  const fields = otp
    ? (["emailOrUsername", "password", "OTP"] as const)
    : (["emailOrUsername", "password"] as const);
  return (
    <div
      className="app min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/login-bg.jpg')",
      }}
    >
      <div className="app min-h-screen flex items-center justify-end-safe px-2 pt-12">
        <motion.div
          initial={{y: 30, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 0.5}}
          className="app w-full max-w-md bg-transparent dark:bg-gray-900 backdrop-blur-xl rounded-2xl shadow-xl p-6 space-y-6"
        >
          <div className="app text-center">
            <h1 className="app text-2xl font-bold text-gray-400 dark:text-white">
              Login here
            </h1>
            <p className="app text-sm text-gray-400 dark:text-gray-300">
              Don't have an account?{" "}
              <Link
                href="/auth/signup"
                className="app text-blue-600 hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>

          <AuthButton />

          <div className="app relative flex justify-center text-sm">
            <span className="app px-2 text-gray-300">Or continue with</span>
          </div>

          <form
            onSubmit={handleSubmit}
            className="app space-y-2"
          >
            {fields.map((field) => (
              <div
                key={field}
                className="app space-y-1"
              >
                <input
                  type={field === "password" ? "password" : "text"}
                  name={field}
                  placeholder={
                    field === "emailOrUsername"
                      ? "Username or Email"
                      : field.charAt(0).toUpperCase() + field.slice(1)
                  }
                  value={formData[field]}
                  onChange={handleChange}
                  className={`app w-full px-4 py-2.5 border rounded-xl bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 ${
                    errors[field]
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                />
                {errors[field] && (
                  <p className="app text-sm text-red-500">{errors[field]}</p>
                )}
              </div>
            ))}

            <label className="app flex items-center text-sm text-gray-400">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="app h-4 w-4 text-blue-600 border-gray-300 rounded mr-2 focus:ring-blue-500 bg-gray-300"
              />
              Remember me
            </label>

            <button
              type="submit"
              disabled={
                loading ||
                formData.emailOrUsername.length < 3 ||
                !formData.password
              }
              className="app w-full py-3 text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
            <p className="app text-sm text-center text-gray-400 dark:text-gray-300">
              Don't remember password?{" "}
              <Link
                href="/auth/reset-password"
                className="app text-blue-600 hover:underline"
              >
                Forget Password
              </Link>
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

// performance optimization, efficiency, maintainability, readability, reusable, security and short code
