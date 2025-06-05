import nodemailer from 'nodemailer';
import { forgetPassMailValidation } from '../typeValidations/sendMail';

const user = forgetPassMailValidation
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // or another SMTP provider
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER, // Gmail or SMTP username
      pass: process.env.EMAIL_PASS, // App password or SMTP password
    },
  });

   
  