import {prisma} from "@/lib/prisma";
import {NextRequest, NextResponse} from "next/server";
import {sendEmail} from "@/lib/nodemailer";
import {generateToken, setAuthCookie} from "@/helpers/authentication";
import {welcomeAfterVerificationEmail} from "../../../../../emails/templates/successsignUpEmail";

export async function POST(req: NextRequest) {
  try {
    const {username, email, otp} = await req.json();

    // 🧼 Normalize input to prevent duplication due to casing/spacing
    const [normalizedEmail, normalizedUsername] = [
      email.trim().toLowerCase(),
      username.trim().toLowerCase(),
    ];

    // 🔍 Check for existing user
    const user = await prisma.user.findFirst({
      where: {
        OR: [{email: normalizedEmail}, {username: normalizedUsername}],
      },
    });

    if (!user || !user.otp || !user.otpExpiryTime) {
      return NextResponse.json(
        {success: false, message: "Invalid request"},
        {status: 400}
      );
    }

    if (user.otp !== otp || new Date() > user.otpExpiryTime) {
      return NextResponse.json(
        {success: false, message: "OTP invalid or expired"},
        {status: 401}
      );
    }

    // 📧 Send welcome email
    try {
      await sendEmail({
        to: normalizedEmail,
        subject: "🎉 Welcome to Global Care!",
        html: welcomeAfterVerificationEmail(username),
      });
    } catch (err: any) {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to send welcome email",
          error: err.message,
        },
        {status: 500}
      );
    }

    // 👤 Update user
    const updatedUser = await prisma.user.update({
      where: {id: user.id},
      data: {
        otp: null,
        otpExpiryTime: null,
        isActive: true,
        isVerified: true,
      },
    });
    const {password: _, ...safeUser} = updatedUser; // remove password

    // 🔐 Generate token and set secure cookie
    const token = generateToken(safeUser);

    // 🍪 Set HTTP-only secure cookie
    const response = NextResponse.json(
      {
        success: true,
        message: "OTP verified User registered successfully",
        user: safeUser,
      },
      {status: 201}
    );

    // ✅ Set JWT token in a secure cookie
    return setAuthCookie(response, token);
  } catch (error) {
    console.error("Otp verification Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Otp verification failed. Please try again later.",
      },
      {status: 500}
    );
  }
}
// performance optimization, efficiency, maintainability, readability security and short code
