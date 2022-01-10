"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResendConfirmationEmailUseCase = void 0;
const nodeMailer_1 = require("../../../services/nodeMailer");
const emailConfirmationHTML_1 = require("../../../utils/email/emailConfirmationHTML");
class ResendConfirmationEmailUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(email) {
        const user = await this.usersRepository.findByEmail(email);
        if (!user) {
            throw new Error("Usuário não encontrado");
        }
        if (user.emailConfirmed) {
            throw new Error("Este e-mail já foi confirmado");
        }
        await nodeMailer_1.transporter.sendMail({
            to: email,
            from: process.env.MAIL_SENDER,
            subject: "Confirmação de e-mail",
            html: (0, emailConfirmationHTML_1.emailConfirmationHTML)(user._id, user.name),
        });
    }
}
exports.ResendConfirmationEmailUseCase = ResendConfirmationEmailUseCase;
