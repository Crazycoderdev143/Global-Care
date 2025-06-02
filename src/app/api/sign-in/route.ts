import {
  generateToken,
  setAuthCookie,
  verifyPassword,
} from "@/helpers/authentication";
import {prisma} from "@/lib/prisma";
import {NextRequest, NextResponse} from "next/server";
import {signInValidation} from "@/typeValidations/signInSchema";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("body", body);

    // ✅ Validate user input using signUpValidation schema
    const parseResult = signInValidation.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: parseResult.error.flatten().fieldErrors,
        },
        {status: 400}
      );
    }
    const {emailOrUsername, password, rememberMe} = parseResult.data;

    // 🧼 Normalize input to prevent duplication due to casing/spacing
    const normalizedEmailOrUsername = emailOrUsername.trim().toLowerCase();

    // Check if a user already exists with this email or username
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          {email: normalizedEmailOrUsername}, // Match by email
          {username: normalizedEmailOrUsername}, // Match by username
        ],
      },
    });
    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User does not exist.",
        },
        {status: 404}
      );
    }
    const isvalidPassword = await verifyPassword(password, user.password);
    console.log("isvalidPassword", isvalidPassword);

    if (!isvalidPassword) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid credential.",
        },
        {status: 400}
      );
    }
    // 🪪 Generate JWT token
    const token = generateToken(user);

    // 🍪 Set HTTP-only secure cookie
    const response = NextResponse.json(
      {
        success: true,
        message: "User login successfully.",
        user,
      },
      {status: 200}
    );

    // ✅ Set JWT token in a secure cookie
    return setAuthCookie(response, rememberMe, token);
  } catch (error) {
    console.log("User login Error", error);
    return NextResponse.json(
      {
        success: false,
        message: "User login Error",
      },
      {status: 500}
    );
  }
}
// performance optimization, efficiency, maintainability, readability security and short code
