// services/authService.ts
import {initialDataSignup} from "@/app/signup/page";
import {initialDataSignin} from "@/app/login/page";
import api from "@/lib/api";

export type SignUpPayload = typeof initialDataSignup;
export type SignInPayload = typeof initialDataSignin;

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
