import {
  generateToken,
  setAuthCookie,
  hashPassword,
} from "@/helpers/authentication";
import {prisma} from "@/lib/prisma";
import {NextRequest, NextResponse} from "next/server";
import {generateOTP, expiryTime} from "@/helpers/utils";
import {signUpValidation} from "@/typeValidations/signUpSchema";
import {sendVerificationEmail} from "@/helpers/sendEmail/sendVerificationEmail";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // ✅ Validate user input using signUpValidation schema
    const parseResult = signUpValidation.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: parseResult.error.flatten().fieldErrors,
        },
        {status: 500}
      );
    }
    const {username, email, password, mobile, rememberMe} = parseResult.data;

    // 🧼 Normalize input to prevent duplication due to casing/spacing
    const normalizedEmail = email.trim().toLowerCase();
    const normalizedUsername = username.trim().toLowerCase();

    // 🔎 Check for existing user (email or username)
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{email: normalizedEmail}, {username: normalizedUsername}],
      },
    });
    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: "User is already exist",
        },
        {status: 400}
      );
    }

    // 🔐 Hash password and generate OTP
    const otp = generateOTP();
    const otpExpiryTime = expiryTime();
    const hashedPassword = await hashPassword(password);

    // 📧 Send verification email
    const emailResponse = await sendVerificationEmail(
      normalizedEmail,
      normalizedUsername,
      otp
    );
    if (!emailResponse.success) {
      return NextResponse.json(
        {
          success: false,
          message: emailResponse.message,
        },
        {status: 500}
      );
    }

    // 👤 Create user in database
    const user = await prisma.user.create({
      data: {
        username: normalizedUsername,
        email: normalizedEmail,
        password: hashedPassword,
        mobile,
        otp,
        otpExpiryTime,
      },
      select: {
        id: true,
        username: true,
        email: true,
      },
    });

    // 🪪 Generate JWT token
    const token = generateToken(user);

    // 🍪 Set HTTP-only secure cookie
    const response = NextResponse.json(
      {
        success: true,
        message: "User registered successfully. Please verify your email.",
        user,
      },
      {status: 201}
    );

    // ✅ Set JWT token in a secure cookie
    return setAuthCookie(response, rememberMe, token);
  } catch (error) {
    console.log("User Registration Error", error);
    return NextResponse.json(
      {
        success: false,
        message: "User Registration Error",
      },
      {status: 500}
    );
  }
}

// performance optimization, efficiency, maintainability, readability security and short code
