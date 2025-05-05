import {NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";

export async function POST() {
  const users = await prisma.User.findMany();
  return NextResponse.json(users);
}
