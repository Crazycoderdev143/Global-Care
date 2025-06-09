// "use client";

// import {useState} from "react";
// import Link from "next/link";
// import axios from "axios";
// import GoogleAuthButton from "@/components/ui/authProviders";

// const initialData = {
//   email: "",
//   password: "",
//   confirmPassword: "",
//   rememberMe: false,
// };

// type FormData = typeof initialData;
// type FormErrors = Partial<Record<keyof FormData, string>>;

// export default function SigninForm() {
//   const [formData, setFormData] = useState<FormData>(initialData);
//   const [errors, setErrors] = useState<FormErrors>({});
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const {name, value, type, checked} = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const validate = (): FormErrors => {
//     const newErrors: FormErrors = {};

//     if (!formData.email.includes("@")) {
//       newErrors.email = "Please enter a valid email address.";
//     }

//     if (formData.password.length < 8) {
//       newErrors.password = "Password must be at least 8 characters.";
//     }

//     if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match.";
//     }

//     return newErrors;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const newErrors = validate();
//     setErrors(newErrors);

//     if (Object.keys(newErrors).length > 0) return;

//     setLoading(true);
//     setMessage("");

//     try {
//       const res = await axios.post("/api/auth/signin", formData);
//       setMessage(res.data.message);
//     } catch (err: any) {
//       setMessage(err.response?.data?.message || "Something went wrong.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       className="min-h-screen bg-cover bg-center bg-no-repeat relative"
//       style={{
//         backgroundImage:
//           "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/login-bg.jpg')",
//       }}
//     >
//       <div className="min-h-screen flex items-center justify-center px-4">
//         <div className="w-full max-w-md bg-white dark:bg-neutral-900/80 backdrop-blur-xl rounded-2xl shadow-xl p-8 space-y-6">
//           <div className="text-center">
//             <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
//               Sign In
//             </h1>
//             <p className="text-sm text-gray-600 dark:text-gray-300">
//               Don't have an account?{" "}
//               <Link
//                 href="/signup"
//                 className="text-blue-600 hover:underline"
//               >
//                 Sign up here
//               </Link>
//             </p>
//           </div>

//           <GoogleAuthButton />

//           <div className="relative">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-300 dark:border-gray-700" />
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-2 bg-white dark:bg-neutral-900 text-gray-500">
//                 Or continue with email
//               </span>
//             </div>
//           </div>

//           <form
//             onSubmit={handleSubmit}
//             className="space-y-4"
//           >
//             {(["email", "password", "confirmPassword"] as const).map(
//               (field) => (
//                 <div key={field}>
//                   <input
//                     name={field}
//                     type={field.includes("password") ? "password" : "email"}
//                     placeholder={
//                       field === "confirmPassword"
//                         ? "Confirm Password"
//                         : field.charAt(0).toUpperCase() + field.slice(1)
//                     }
//                     value={formData[field]}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-neutral-800 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
//                   />
//                   {errors[field] && (
//                     <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
//                   )}
//                 </div>
//               )
//             )}

//             <div className="flex items-center">
//               <input
//                 id="rememberMe"
//                 name="rememberMe"
//                 type="checkbox"
//                 checked={formData.rememberMe}
//                 onChange={handleChange}
//                 className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:bg-neutral-800"
//               />
//               <label
//                 htmlFor="rememberMe"
//                 className="ml-2 text-sm text-gray-700 dark:text-gray-300"
//               >
//                 Remember me
//               </label>
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full py-3 text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
//             >
//               {loading ? "Signing in..." : "Sign In"}
//             </button>

//             {message && (
//               <p className="text-center text-sm mt-3 text-red-600 dark:text-red-400">
//                 {message}
//               </p>
//             )}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import {useState} from "react";
import Link from "next/link";
import axios from "axios";
import GoogleAuthButton from "@/components/ui/authProviders";
import {motion} from "framer-motion";

const initialData = {
  email: "",
  password: "",
  confirmPassword: "",
  rememberMe: false,
};

type FormData = typeof initialData;
type FormErrors = Partial<Record<keyof FormData, string>>;

export default function SigninForm() {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value, type, checked} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!formData.email.includes("@")) e.email = "Enter a valid email.";
    if (formData.password.length < 8) e.password = "Min 8 characters required.";
    if (formData.password !== formData.confirmPassword)
      e.confirmPassword = "Passwords do not match.";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);
    setMessage("");
    try {
      const res = await axios.post("/api/auth/signin", formData);
      setMessage(res.data.message || "Signed in successfully!");
    } catch (err: any) {
      setMessage(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/login-bg.jpg')",
      }}
    >
      <div className="min-h-screen flex items-center justify-center px-2">
        <motion.div
          initial={{y: 30, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 0.5}}
          className="w-full max-w-md bg-transparent dark:bg-neutral-900/80 backdrop-blur-xl rounded-2xl shadow-xl p-6 space-y-6"
        >
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Sign In
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="text-blue-600 hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>

          <GoogleAuthButton />

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-700" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-neutral-900 text-gray-500">
                Or continue with email
              </span>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {(["email", "password", "confirmPassword"] as const).map(
              (field) => (
                <div key={field}>
                  <input
                    type={field.includes("password") ? "password" : "email"}
                    name={field}
                    placeholder={
                      field === "confirmPassword"
                        ? "Confirm Password"
                        : field.charAt(0).toUpperCase() + field.slice(1)
                    }
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-neutral-800 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  />
                  {errors[field] && (
                    <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
                  )}
                </div>
              )
            )}

            <label className="flex items-center text-sm text-gray-700 dark:text-gray-300">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded mr-2 focus:ring-blue-500 dark:bg-neutral-800"
              />
              Remember me
            </label>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>

            {message && (
              <p className="text-center text-sm mt-3 text-red-600 dark:text-red-400">
                {message}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
}


// performance optimization, efficiency, maintainability, readability, reusable, security and short code
