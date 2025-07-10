// services/authService.ts
import api from "@/lib/api";
import {initialDataSignup} from "@/app/(app)/auth/signup/page";
import {initialDataSignin} from "@/app/(app)/auth/login/page";
import {initialDataResetPassword} from "@/app/(app)/auth/reset-password/page";

export type SignUpPayload = typeof initialDataSignup;
export type SignInPayload = typeof initialDataSignin;
export type ResetPasswordPayload = typeof initialDataResetPassword;

//Genrate OTP and create new user for sign up
export async function signUp(data: SignUpPayload) {
  const response = await api.post("/auth/sign-up", data);
  return response.data;
}

// Verify OTP and sign up successfull
export async function verifyOtp(data: SignUpPayload) {
  const response = await api.post("/auth/verify-otp", data);
  return response.data;
}

// Login
export async function signin(data: SignInPayload) {
  const response = await api.post("/auth/sign-in", data);
  return response.data;
}

// OTP for Reset password
export async function otpToResetPassword(data: string) {
  const response = await api.get(
    `/auth/reset-password?emailOrUsername=${data}`
  );
  return response.data;
}

// Submit otp to Reset password
export async function resetPassword(data: ResetPasswordPayload) {
  const response = await api.post(`/auth/reset-password`, data);
  return response.data;
}
