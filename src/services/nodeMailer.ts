import nodemailer from "nodemailer";

interface MailConfig {
  MAIL_HOST: string;
  MAIL_PORT: number;
  MAIL_USER: string;
  MAIL_PASS: string;
}

const {
  MAIL_HOST: host,
  MAIL_PORT: port,
  MAIL_USER: user,
  MAIL_PASS: pass,
} = process.env as unknown as MailConfig;

const transporter = nodemailer.createTransport({
  host,
  port,
  auth: {
    user,
    pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export { transporter };