// src/services/user/userService.ts
import {prisma} from "@/lib/prisma";
import {hashPassword} from "@/lib/auth";
import {User} from "@/types/userType";

export const createUser = async (data: User) => {
  const {userName, email, password, mobile, role} = data;

  const existingUser = await prisma.user.findUnique({where: {email}});
  if (existingUser) throw new Error("User already exists");

  const hashedPassword = await hashPassword(password);

  const user = await prisma.user.create({
    data: {name, email, password: hashedPassword},
  });

  return user;
};
