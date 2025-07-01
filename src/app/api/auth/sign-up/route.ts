import {prisma} from "@/lib/prisma";
import {NextRequest, NextResponse} from "next/server";
import {
  generateToken,
  setAuthCookie,
  hashPassword,
} from "@/helpers/authentication";
import {sendEmail} from "@/lib/nodemailer";
import {generateOTP, expiryTime} from "@/helpers/utils";
import {signUpValidation} from "@/typeValidations/signUpSchema";
import {otpEmail} from "../../../../../emails/templates/emailOtpVerification";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // ✅ Validate input
    const {success, data, error} = signUpValidation.safeParse(body);
    if (!success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: error.flatten().fieldErrors,
        },
        {status: 400}
      );
    }

    const {username, email, password, mobile, termCondition} = data;

    // 🧼 Normalize input to prevent duplication due to casing/spacing
    const [normalizedEmail, normalizedUsername] = [
      email.trim().toLowerCase(),
      username.trim().toLowerCase(),
    ];
 
    // 🔍 Check for existing user
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{email: normalizedEmail}, {username: normalizedUsername}],
      },
      select: {id: true}, // limit data fetched
    });

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: "User already exists",
        },
        {status: 409}
      );
    }

    // ⏱️ Parallel password hash + OTP
    const [hashedPassword, otp] = await Promise.all([
      hashPassword(password),
      generateOTP(),
    ]);

    const otpExpiryTime = expiryTime();

    // 📧 Send verification email
    try {
      await sendEmail({
        to: normalizedEmail,
        subject: "Your Verification Code",
        html: otpEmail(username, otp),
      });
    } catch (err: any) {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to send verification email",
          error: err.message,
        },
        {status: 500}
      );
    }

    // 👤 Create new user
    const user = await prisma.user.create({
      data: {
        username: normalizedUsername,
        email: normalizedEmail,
        password: hashedPassword,
        mobile,
        otp,
        otpExpiryTime,
        isTermCondition: termCondition,
      },
      select: {id: true, username: true, email: true, role: true},
    });

    // 🔐 Generate token and set secure cookie
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
    return setAuthCookie(response, token);
  } catch (error) {
    console.error("User Registration Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "User registration failed. Please try again later.",
      },
      {status: 500}
    );
  }
}
// performance optimization, efficiency, maintainability, readability security and short code
