"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoUserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const nodeMailer_1 = require("../../../services/nodeMailer");
const emailConfirmationHTML_1 = require("../../../utils/email/emailConfirmationHTML");
const userSchema = new mongoose_1.default.Schema({
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
userSchema.pre("save", async function (next) {
    await nodeMailer_1.transporter.sendMail({
        to: this.email,
        from: process.env.MAIL_SENDER,
        subject: "Confirmação de e-mail",
        html: (0, emailConfirmationHTML_1.emailConfirmationHTML)(this.id, this.name),
    });
    return next();
});
const mongoUserModel = mongoose_1.default.model("User", userSchema);
exports.mongoUserModel = mongoUserModel;
