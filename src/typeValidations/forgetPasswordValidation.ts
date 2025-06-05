import {z} from "zod";

const usernameRegex = /^[a-zA-Z0-9_]{3,25}$/;

export const forgetPasswordValidation = z.object({
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
