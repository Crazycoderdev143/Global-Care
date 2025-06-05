import { usernameValidation } from "./signUpSchema";
import { z } from "zod";

// Full Sign Up Validation Schema
export const forgetPassMailValidation = z.object({
    username: usernameValidation,
    email: z.string().email({ message: "Invalid email address" }),
    url: z.string(),
});
