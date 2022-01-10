"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgotPasswordUseCase = void 0;
const UserModel_1 = require("../../../models/UserModel");
const nodeMailer_1 = require("../../../services/nodeMailer");
const generateToken_1 = require("../../../utils/generateToken");
const forgotPasswordHTML_1 = require("../../../utils/email/forgotPasswordHTML");
class ForgotPasswordUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(email) {
        const user = await UserModel_1.mongoUser.findOne({ email }).select("+passwordResetToken");
        if (!user) {
            throw new Error("Usuário não encontrado");
        }
        const passwordResetToken = (0, generateToken_1.generateToken)({ id: user._id }, 3600);
        const passwordResetExpires = ((Number(new Date())) / 1000) + 3600;
        user.passwordResetToken = passwordResetToken;
        user.passwordResetExpires = passwordResetExpires;
        await this.usersRepository.update(user._id, user);
        await nodeMailer_1.transporter.sendMail({
            to: email,
            from: process.env.MAIL_SENDER,
            subject: "Esqueceu sua senha?",
            html: (0, forgotPasswordHTML_1.forgotPasswordHTML)(user.passwordResetToken, user.name),
        });
    }
}
exports.ForgotPasswordUseCase = ForgotPasswordUseCase;
