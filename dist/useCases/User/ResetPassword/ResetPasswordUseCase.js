"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetPasswordUseCase = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const generateNewPassword_1 = require("../../../utils/generateNewPassword");
const nodeMailer_1 = require("../../../services/nodeMailer");
const resetedPasswordHTML_1 = require("../../../utils/email/resetedPasswordHTML");
class ResetPasswordUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(token) {
        const user = await this.usersRepository.findByResetToken(token);
        if (!user) {
            throw new Error("Usuário não encontrado");
        }
        const now = Date.now() / 1000;
        if (now > user.passwordResetExpires) {
            throw new Error("Token expirado");
        }
        const newPassword = (0, generateNewPassword_1.generatePassword)();
        const newPasswordEncrypted = bcrypt_1.default.hashSync(newPassword, 10);
        user.password = newPasswordEncrypted;
        user.passwordResetExpires = now;
        await this.usersRepository.update(user._id, user);
        await nodeMailer_1.transporter.sendMail({
            to: user.email,
            from: process.env.MAIL_SENDER,
            subject: "Sua nova senha",
            html: (0, resetedPasswordHTML_1.resetedPasswordHTML)(user.name, newPassword),
        });
    }
}
exports.ResetPasswordUseCase = ResetPasswordUseCase;
