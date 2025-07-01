"use client";

import {z} from "zod";
import {useState} from "react";
import {motion} from "framer-motion";
import {useRouter} from "next/navigation";
import {
  resetPasswordGetOtpValidation,
  resetPasswordValidation,
} from "../../../typeValidations/resetPasswordSchema";
import {otpToResetPassword, resetPassword} from "@/services/authServices";

type ResetPayload = z.infer<typeof resetPasswordValidation>;
type OtpRequestPayload = z.infer<typeof resetPasswordGetOtpValidation>;

export const initialDataResetPassword: ResetPayload = {
  emailOrUsername: "",
  newPassword: "",
  OTP: "",
};

export default function ResetPasswordForm() {
  const router = useRouter();
  const [otp, setOtp] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [formData, setFormData] = useState<FormData>(initialDataResetPassword);
  const [formData, setFormData] = useState(initialDataResetPassword);
  const [errors, setErrors] = useState<
    Partial<Record<keyof ResetPayload, string>>
  >({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
    setErrors((prev) => ({...prev, [name]: undefined}));
  };

  const mapZodErrors = (issues: z.ZodIssue[]) => {
    return issues.reduce(
      (acc, err) => {
        const field = err.path[0] as keyof ResetPayload;
        acc[field] = err.message;
        return acc;
      },
      {} as Partial<Record<keyof ResetPayload, string>>
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const schema = otp
      ? resetPasswordValidation
      : resetPasswordGetOtpValidation;
    const input = otp ? formData : {emailOrUsername: formData.emailOrUsername};

    const parsed = schema.safeParse(input);

    if (!parsed.success) {
      setErrors(mapZodErrors(parsed.error.errors));
      return;
    }

    // const data = parsed.data;
    setLoading(true);
    try {
      const res = otp
        ? await resetPassword(parsed.data as ResetPayload)
        : await otpToResetPassword(
            (parsed.data as OtpRequestPayload).emailOrUsername
          );

      if (res.success)
        otp ? (router.replace("/auth/login"), setOtp(false)) : setOtp(true);
    } catch (err) {
      console.error("reset password failed", err);
    } finally {
      setLoading(false);
    }
  };

  const fields = otp
    ? (["OTP", "newPassword"] as const)
    : (["emailOrUsername"] as const);

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
              Forget Password
            </h1>
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
                  type={field === "newPassword" ? "password" : "text"}
                  name={field}
                  placeholder={
                    field === "OTP"
                      ? "Enter OTP sent to your email"
                      : field === "newPassword"
                        ? "New Password"
                        : "Username or Email"
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

            <button
              type="submit"
              disabled={
                loading ||
                (!otp
                  ? formData.emailOrUsername.length < 3
                  : formData.newPassword.length < 8 || !formData.OTP)
              }
              className="app w-full py-3 text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {loading ? "Submiting..." : otp ? "Reset Password" : "Submit"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

// performance optimization, efficiency, maintainability, readability, reusable, security and short code
