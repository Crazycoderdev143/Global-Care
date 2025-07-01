import {prisma} from "@/lib/prisma";
import {NextRequest, NextResponse} from "next/server";
import {sendEmail} from "@/lib/nodemailer";
import {generateOTP, expiryTime} from "@/helpers/utils";
import {
  resetPasswordGetOtpValidation,
  resetPasswordValidation,
} from "@/typeValidations/resetPasswordSchema";
import {forgotPasswordEmail} from "../../../../../emails/templates/forgetPasswordEmail";
import {hashPassword} from "@/helpers/authentication";

export async function GET(req: NextRequest) {
  try {
    const {searchParams} = new URL(req.url);
    const identifier = searchParams.get("emailOrUsername");

    // ✅ Validate input
    const {success, data, error} = resetPasswordGetOtpValidation.safeParse({
      emailOrUsername: identifier,
    });

    if (!success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed ",
          errors: error.flatten().fieldErrors,
        },
        {status: 400}
      );
    }

    const {emailOrUsername} = data;

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
          message: "User account not found",
        },
        {status: 409}
      );
    }

    // ⏱️ Parallel OTP
    const otp = generateOTP();
    const otpExpiryTime = expiryTime();

    // 📧 Send code on email
    try {
      await sendEmail({
        to: user.email,
        subject: "Your Code for reset password",
        html: forgotPasswordEmail(user.username, otp),
      });
    } catch (err: any) {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to send code on email for reset password.",
          error: err.message,
        },
        {status: 500}
      );
    }

    const updatedUser = await prisma.user.update({
      where: {id: user.id},
      data: {otp, otpExpiryTime},
      select: {id: true},
    });
    // 🍪 Set HTTP-only secure cookie
    const response = NextResponse.json(
      {
        success: true,
        message: "OTP sent successfully to your email.",
      },
      {status: 200}
    );
    return response;
  } catch (error) {
    console.error("Faild to reset password:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Faild to reset password. Please try again later.",
      },
      {status: 500}
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // ✅ Validate input
    const {success, data, error} = resetPasswordValidation.safeParse(body);
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

    const {emailOrUsername, newPassword, OTP} = data;

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

    if (!user || !user.otp || !user.otpExpiryTime) {
      return NextResponse.json(
        {success: false, message: "Invalid request"},
        {status: 400}
      );
    }

    if (user.otp !== OTP || new Date() > user.otpExpiryTime) {
      return NextResponse.json(
        {success: false, message: "OTP invalid or expired"},
        {status: 401}
      );
    }
    // ⏱️ password hash
    const hashedPassword = await hashPassword(newPassword);

    // // 📧 Send code on email
    // try {
    //   await sendEmail({
    //     to: user.email,
    //     subject: "Your Code for reset password",
    //     html: forgotPasswordEmail(user.username, otp),
    //   });
    // } catch (err: any) {
    //   return NextResponse.json(
    //     {
    //       success: false,
    //       message: "Failed to send code on email for reset password.",
    //       error: err.message,
    //     },
    //     {status: 500}
    //   );
    // }

    // 👤 Update user
    const updatedUser = await prisma.user.update({
      where: {id: user.id},
      data: {
        otp: null,
        otpExpiryTime: null,
        password: hashedPassword,
      },
    });

    // 🍪 Set HTTP-only secure cookie
    const response = NextResponse.json(
      {
        success: true,
        message: "Password reset successfully.",
      },
      {status: 200}
    );
    return response;
  } catch (error) {
    console.error("Password reseting Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Password reseting failed. Please try again later.",
      },
      {status: 500}
    );
  }
}
// performance optimization, efficiency, maintainability, readability security and short code
