"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transporter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const { MAIL_HOST: host, MAIL_PORT: port, MAIL_USER: user, MAIL_PASS: pass, } = process.env;
const transporter = nodemailer_1.default.createTransport({
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
exports.transporter = transporter;
