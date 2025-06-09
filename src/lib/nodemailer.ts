import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASS,
  },
});

type EmailOptions = {
  to: string;
  subject: string;
  html: string;
};

export const sendEmail = async ({to, subject, html}: EmailOptions) =>
  await transporter.sendMail({
    from: `"Global Care" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
  });
