import {z} from "zod";

const usernameRegex = /^[a-zA-Z0-9_]{3,25}$/;

export const signInValidation = z.object({
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
  password: z.string().min(1, {message: "Password is required"}),
  OTP: z
    .union([
      z.string().length(6, {message: "OTP must be 6 digits"}),
      z.literal(""),
      z.undefined(),
    ])
    .optional(),
  rememberMe: z.boolean(),
});
