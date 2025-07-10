import {UserRole} from "./roles";

export interface User {
  id: string;
  userName: string;
  email: string;
  mobile: string;
  password: string;
  role: UserRole;
  otp: number;
  otpEpiryTime: Date;
  createdAt: Date;
  updatedAt: Date;
}
