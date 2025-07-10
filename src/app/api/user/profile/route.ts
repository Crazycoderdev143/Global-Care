import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const {searchParams} = new URL(req.url);
    const userId: string = searchParams.get("userId")!;

    // 🔍 Fetch all users (excluding sensitive fields)
    const user = await prisma.user.findFirst({
      where: {id: userId},
    });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User account not found.",
        },
        {status: 404}
      );
    }
    const {password, ...safeUser} = user;

    return NextResponse.json(
      {
        success: true,
        message: "Fetch user successfully.",
        user: safeUser,
      },
      {status: 200}
    );
  } catch (error) {
    console.error("Error fetching user.", error);
    return Response.json(
      {
        success: false,
        message: "Error fetching user.",
      },
      {status: 500}
    );
  }
}

// performance optimization, efficiency, maintainability, readability security and short code
