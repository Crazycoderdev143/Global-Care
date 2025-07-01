import {
  generateToken,
  setAuthCookie,
  verifyPassword,
} from "@/helpers/authentication";
import {prisma} from "@/lib/prisma";
import {sendEmail} from "@/lib/nodemailer";
import {NextRequest, NextResponse} from "next/server";
import {expiryTime, generateOTP} from "@/helpers/utils";
import {signInValidation} from "@/typeValidations/signInSchema";
import {otpEmail} from "../../../../../emails/templates/emailOtpVerification";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

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
    const {emailOrUsername, password, OTP, rememberMe} = parseResult.data;

    // 🧼 Normalize input to prevent duplication due to casing/spacing
    const identifier = emailOrUsername.trim().toLowerCase();

    // Check if a user already exists with this email or username
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          {email: identifier}, // Match by email
          {username: identifier}, // Match by username
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

    // Send OTP if not verified or OTP is missing
    const otpExpired = !user.otpExpiryTime || new Date() > user?.otpExpiryTime;
    const needsOtp = !user.isVerified && otpExpired;
    if (needsOtp) {
      // ⏱️ Parallel OTP
      const otp = generateOTP();
      const otpExpiryTime = expiryTime();

      // 📧 Send verification email
      try {
        await sendEmail({
          to: user.email,
          subject: "Your Verification Code",
          html: otpEmail(
            user.username.charAt(0).toUpperCase() + user.username.slice(1),
            otp
          ),
        });
        // 👤 Update user
        const updatedUser = await prisma.user.update({
          where: {id: user.id},
          data: {
            otp,
            otpExpiryTime,
          },
        });
        return NextResponse.json(
          {
            success: true,
            otp: true,
            message:
              "Verification code has been sent on your email. Please verify it.",
          },
          {status: 200}
        );
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
    }

    if (OTP) {
      try {
        if (
          user.otp !== OTP ||
          !user.otpExpiryTime ||
          new Date() > user?.otpExpiryTime
        ) {
          return NextResponse.json(
            {success: false, message: "OTP invalid or expired"},
            {status: 401}
          );
        }
        // 👤 Update user
        const updatedUser = await prisma.user.update({
          where: {id: user.id},
          data: {
            otp: null,
            otpExpiryTime: null,
            isVerified: true,
          },
        });
      } catch (error) {
        return NextResponse.json(
          {success: false, message: "OTP validation failed"},
          {status: 402}
        );
      }
    }

    const isvalidPassword = await verifyPassword(password, user.password);
    if (!isvalidPassword) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid credential.",
        },
        {status: 401}
      );
    }

    // 🪪 Generate JWT token
    const {password: _, ...safeUser} = user; // remove password
    const token = generateToken(safeUser);

    // 🍪 Set HTTP-only secure cookie
    const response = NextResponse.json(
      {
        success: true,
        message: "User login successfully.",
        user: safeUser,
      },
      {status: 200}
    );

    // ✅ Set JWT token in a secure cookie
    return setAuthCookie(response, token, rememberMe);
  } catch (error) {
    console.log("User login Error", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error during login.",
      },
      {status: 500}
    );
  }
}
// performance optimization, efficiency, maintainability, readability security and short code
