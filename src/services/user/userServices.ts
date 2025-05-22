// src/services/user/userService.ts
import {prisma} from "@/lib/prisma";
import {hashPassword} from "@/lib/authentication";
import {CreateUserInput} from "./userValidation";

export const createUser = async (data: CreateUserInput) => {
  const {userName, email, password, mobile, role} = data;

  // Check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: {email},
  });

  if (existingUser) {
    throw new Error("Email already registered");
  }

  // Generate hashed password and OTP
  const hashedPassword = await hashPassword(password);
  const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
  const otpExpiryTime = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

  // Create user
  const user = await prisma.user.create({
    data: {
      userName,
      email,
      password: hashedPassword,
      mobile,
      role: role ?? "USER",
      otp,
      otpEpiryTime: otpExpiryTime,
    },
  });

  return {
    id: user.id,
    userName: user.userName,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt,
  };
};
