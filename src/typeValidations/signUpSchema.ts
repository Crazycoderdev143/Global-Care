import {z} from "zod";

// Username Validation
export const usernameValidation = z
  .string()
  .min(3, {message: "Username must be at least 3 characters"})
  .max(15, {message: "Username must be no more than 15 characters"})
  .regex(/^[a-zA-Z0-9_]+$/, {
    message: "Username must not contain special characters",
  });

// Mobile Number Validation (basic: 10 digits, can be adjusted as needed)
export const mobileValidation = z
  .string()
  .regex(/^\d{10}$/, {message: "Mobile number must be 10 digits"});

// Full Sign Up Validation Schema
export const signUpValidation = z.object({
  username: usernameValidation,
  email: z.string().email({message: "Invalid email address"}),
  mobile: mobileValidation,
  rememberMe: z.boolean(),
  password: z
    .string()
    .min(8, {message: "Password must be at least 8 characters"}),
});
