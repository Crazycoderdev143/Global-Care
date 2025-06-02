import {resend} from "@/lib/resend";
import VerificationEmail from "../../../emails/verificationEmail";
import {ApiResponse} from "@/types/ApiResponse";

export const sendVerificationEmail = async (
  email: string,
  username: string,
  otp: string
): Promise<ApiResponse> => {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Global Care verification Code",
      react: VerificationEmail({username, otp}),
    });
    return {success: true, message: "verivication email send successfully."};
  } catch (error) {
    console.error("Error sending verification email", error);
    return {success: false, message: "Failed to send verivication email"};
  }
};
