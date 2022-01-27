import { IUser } from "../../../models/UserModel";
import mongoose from "mongoose";
import { transporter as mailer } from "../../../services/nodeMailer";
import { emailConfirmationHTML } from "../../../utils/email/emailConfirmationHTML";

const userSchema = new mongoose.Schema<IUser>({
  id: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    select: false,
  },
  name: {
    type: String,
    required: true,
    match: /^[a-zA-Z ]+$/,
  },
  age: {
    type: Number,
    required: true,
  },
  isProfessor: {
    type: Boolean,
    default: false,
  },
  picture: {
    type: String,
  },
  emailConfirmed: {
    type: Boolean,
    default: false,
  },
  passwordResetToken: {
    type: String,
    select: false,
  },
  passwordResetExpires: {
    type: Number,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", async function(next) {
  await mailer.sendMail({
    to: this.email,
    from: process.env.MAIL_SENDER,
    subject: "Confirmação de e-mail",
    html: emailConfirmationHTML(this.id, this.name),
  });
  
  return next();
});

const mongoUserModel = mongoose.model("User", userSchema);

export { mongoUserModel };