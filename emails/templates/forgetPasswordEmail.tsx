// import {emailLayout} from "../emailLayout";

// export const passwordResetEmail = (username: string, resetUrl: string) =>
//   emailLayout(`
//   <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; line-height: 1.5;">
//     <h2>Hello ${username},</h2>
//     <p>We received a request to reset your password. Click the button below to continue:</p>
//     <a href="${resetUrl}" style="
//       display: inline-block;
//       padding: 10px 20px;
//       margin: 20px 0;
//       background-color: #0070f3;
//       color: #fff;
//       text-decoration: none;
//       border-radius: 4px;
//       font-weight: bold;
//     ">Reset Password</a>
//     <p>If you didn’t request this, you can safely ignore this email.</p>
//   </div>
// `);

import {emailLayout} from "../emailLayout";

export const forgotPasswordEmail = (username: string, otp: string) =>
  emailLayout(`
  <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; line-height: 1.5;">
    <h2>Hello ${username},</h2>
    <p>We received a request to reset your password.</p>
    <p>Use the following One-Time Password (OTP) to proceed. It is valid for <strong>10 minutes</strong>:</p>
    <h1 style="color: #d9534f; letter-spacing: 4px;">${otp}</h1>
    <p>If you didn’t request a password reset, please ignore this email or contact support if you have concerns.</p>
  </div>
`);
