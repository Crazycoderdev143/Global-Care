"use client";

import Link from "next/link";
import {useState} from "react";
import {motion} from "framer-motion";
import GoogleAuthButton from "@/components/ui/authProviders";
import {signUpValidation} from "../../typeValidations/signUpSchema";

const initialData = {
  username: "",
  email: "",
  mobile: "",
  password: "",
  termCondition: false,
};
type FormData = typeof initialData;

export default function Signup() {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );
  const [loading, setLoading] = useState(false);

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

    const parsed = signUpValidation.safeParse(formData);

    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      parsed.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);

    try {
      console.log("Form submitted", parsed.data);
      // your sign-up logic here
    } catch (err) {
      console.error("Sign up failed", err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/login-bg.jpg')",
        }}
      >
        <div className="min-h-screen flex items-center justify-end-safe px-2 pt-12">
          <motion.div
            initial={{y: 30, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.5}}
            className="w-full max-w-md bg-transparent dark:bg-neutral-900/80 backdrop-blur-xl rounded-2xl shadow-xl p-4 space-y-4"
          >
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-400 dark:text-white">
                Create Account
              </h1>
              <p className="text-sm text-gray-400 dark:text-gray-300">
                Already have an account?{" "}
                <Link
                  href="/signup"
                  className="text-blue-600 hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </div>

            <GoogleAuthButton />

            <div className="relative flex justify-center text-sm">
              <span className="px-1 text-gray-300">Or continue with</span>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-1"
            >
              {(["username", "email", "mobile", "password"] as const).map(
                (field) => (
                  <div
                    key={field}
                    className="space-y-1"
                  >
                    <input
                      type={field === "password" ? "password" : "text"}
                      name={field}
                      placeholder={
                        field === "mobile"
                          ? "Mobile Number"
                          : field.charAt(0).toUpperCase() + field.slice(1)
                      }
                      value={formData[field]}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl bg-white dark:bg-neutral-800 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 ${
                        errors[field]
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-300 dark:border-gray-600"
                      }`}
                    />
                    {errors[field] && (
                      <p className="text-sm text-red-500">{errors[field]}</p>
                    )}
                  </div>
                )
              )}

              <label className="flex items-center space-x-2 px-2 text-sm text-gray-400 dark:text-gray-300">
                <input
                  type="checkbox"
                  name="termCondition"
                  checked={formData.termCondition}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
                />
                <span className="text-xs">
                  By signing up, you agree to our{" "}
                  <a
                    href="#"
                    className="text-indigo-400 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 underline"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-indigo-400 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 underline"
                  >
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                {loading ? "Creating..." : "Create account"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
}
