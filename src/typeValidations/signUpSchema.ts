import {z} from "zod";
export const usernameValidatin = z
  .string()
  .min(3, "username must be atleast 3 characters")
  .max(15, "username must be no mer than 15 characters")
  .regex(/^[a-zA-Z0-9_]+$/, "username must not contain special character");

export const signUpValidation = z.object({
  username: usernameValidatin,
  email: z.string().email({message: "Invalid email address"}),
  password: z
    .string()
    .min(8, {message: "Password must be atleast 8 characters"}),
});
