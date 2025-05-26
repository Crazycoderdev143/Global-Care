// src/services/user/userValidation.ts
import * as z from "zod";

export const createUserSchema = z.object({
  userName: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
  mobile: z.string().min(10),
  role: z.string(),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;
