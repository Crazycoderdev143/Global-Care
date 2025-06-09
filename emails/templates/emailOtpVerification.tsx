import {emailLayout} from "../emailLayout";
export const otpEmail = (username: string, otp: string) =>
  emailLayout(`
  <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; line-height: 1.5;">
    <h2>Hello ${username},</h2>
    <p>Use the following One-Time Password (OTP) to proceed. It is valid for <strong>10 minutes</strong>:</p>
    <h1 style="color: #0070f3; letter-spacing: 4px;">${otp}</h1>
    <p>If you didn't request this, you can safely ignore this email.</p>
  </div>
`);
