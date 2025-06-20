"use client";

import Link from "next/link";
import {useState} from "react";
import {motion} from "framer-motion";
import {useRouter} from "next/navigation";
import GoogleAuthButton from "@/components/ui/authProviders";
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {signInValidation} from "../../typeValidations/signInSchema";
import {signin} from "@/services/authServices";
import {logout, login} from "@/redux/Slices/userSlice";

export const initialDataSignin = {
  emailOrUsername: "",
  password: "",
  rememberMe: false,
};

type FormData = typeof initialDataSignin;

export default function SigninForm() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const {isLoggedIn} = useAppSelector((state) => state.user);
  const [formData, setFormData] = useState<FormData>(initialDataSignin);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value, type, checked} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({...prev, [name]: undefined})); // Clear error on change
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const {data, success, error} = signInValidation.safeParse(formData);

    if (!success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);

    try {
      console.log("Form submitted", data);
      const res = await signin(data);
      console.log("object res", res);
      if (res.success) {
        dispatch(login(res.user));
      }
      router.push("/");
    } catch (err) {
      console.error("Sign in failed", err);
      dispatch(logout());
    } finally {
      setLoading(false);
    }
  };

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
              Sign In
            </h1>
            <p className="app text-sm text-gray-400 dark:text-gray-300">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="app text-blue-600 hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>

          <GoogleAuthButton />

          <div className="app relative flex justify-center text-sm">
            <span className="app px-2 text-gray-300">Or continue with</span>
          </div>

          <form
            onSubmit={handleSubmit}
            className="app space-y-4"
          >
            {(["emailOrUsername", "password"] as const).map((field) => (
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
                      : "Password"
                  }
                  value={formData[field]}
                  onChange={handleChange}
                  className={`app w-full px-4 py-3 border rounded-xl bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 ${
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
          </form>
        </motion.div>
      </div>
    </div>
  );
}

// performance optimization, efficiency, maintainability, readability, reusable, security and short code
