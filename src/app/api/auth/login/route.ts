import {NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";

export async function GET() {
  console.log("Login");
  const user = {userName: "Sdky"};
  return NextResponse.json(user);
}

// export async function () {
//   const users = await prisma.User.findMany();
//   return NextResponse.json(users);
// }
