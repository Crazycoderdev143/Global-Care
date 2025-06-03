import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    // 🔍 Fetch all users (excluding sensitive fields)
    const users = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        mobile: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        createdAt: "desc", // optional: newest first
      },
    });

    if (!users) {
      return NextResponse.json(
        {
          success: false,
          message: "Usernames not found.",
        },
        {status: 404}
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Fetch all usernames successfully.",
        users,
      },
      {status: 200}
    );
  } catch (error) {
    console.error("Error fetching usernames.", error);
    return Response.json(
      {
        success: false,
        message: "Error fetching usernames.",
      },
      {status: 500}
    );
  }
}

// performance optimization, efficiency, maintainability, readability security and short code
