import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {Prisma} from "@prisma/client";
import {NextResponse} from "next/server";

// Type-safe user payload based on your Prisma schema
type User = Prisma.UserGetPayload<true>;
const JWT_SECRET = process.env.JWT_SECRET || "secret";

export function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

export function verifyPassword(password: string, hashedPassword: string) {
  return bcrypt.compare(password, hashedPassword);
}

export function generateToken(user: User) {
  return jwt.sign(
    {id: user.id, email: user.email, role: user.role},
    JWT_SECRET,
    {expiresIn: "1d"}
  );
}

export function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET);
}

export function setAuthCookie(
  response: NextResponse,
  rememberMe: boolean,
  token: string
) {
  response.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    ...(rememberMe
      ? {maxAge: 60 * 60 * 24 * 7} // Persistent: 7 days
      : {}), // Session: no maxAge/expires
  });

  return response;
}
