import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import {User} from "@prisma/client";

const JWT_SECRET = process.env.JWT_SECRET || "secret";

export function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

export function verifyPassword(password: string, hashed: string) {
  return bcrypt.compare(password, hashed);
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
