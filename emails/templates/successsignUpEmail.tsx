export const welcomeAfterVerificationEmail = (username: string) => `
  <h2 style="margin-top: 0; color: #0070f3;">Welcome to Global Care, ${username} 🎉</h2>

  <p style="font-size: 16px; line-height: 1.5;">
    We're excited to have you on board. Your email has been successfully verified and your account is now active.
  </p>

  <p style="font-size: 16px; line-height: 1.5;">
    You can now log in, explore our services, book appointments, and take advantage of everything Global Care has to offer.
  </p>

  <div style="text-align: center; margin: 24px 0;">
    <a 
      href="https://yourdomain.com/login"
      style="
        background: #0070f3;
        color: #fff;
        padding: 12px 24px;
        border-radius: 6px;
        text-decoration: none;
        font-weight: bold;
      "
    >
      Log In Now
    </a>
  </div>

  <p style="font-size: 14px; color: #555;">
    If you didn’t register on Global Care, please ignore this email.
  </p>
`;
