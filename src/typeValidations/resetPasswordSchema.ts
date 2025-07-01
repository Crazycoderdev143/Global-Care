import {z} from "zod";

const usernameRegex = /^[a-zA-Z0-9_]{3,25}$/;

export const resetPasswordGetOtpValidation = z.object({
  emailOrUsername: z
    .string()
    .refine(
      (val) =>
        z.string().email().safeParse(val).success || usernameRegex.test(val),
      {
        message:
          "Must be a valid email or username (3-25 characters, no special characters)",
      }
    ),
});

export const resetPasswordValidation = z.object({
  emailOrUsername: z
    .string()
    .refine(
      (val) =>
        z.string().email().safeParse(val).success || usernameRegex.test(val),
      {
        message:
          "Must be a valid email or username (3-25 characters, no special characters)",
      }
    ),
  newPassword: z.string().min(1, {message: "New Password is required"}),
  OTP: z.string().regex(/^\d{6}$/, {
    message: "OTP must be a 6-digit number",
  }),
});
