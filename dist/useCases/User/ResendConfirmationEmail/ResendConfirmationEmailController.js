"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResendConfirmationEmailController = void 0;
class ResendConfirmationEmailController {
    constructor(resendConfirmationUseCase) {
        this.resendConfirmationUseCase = resendConfirmationUseCase;
    }
    async handle(req, res) {
        const { email } = req.body;
        try {
            await this.resendConfirmationUseCase.execute(email);
            return res.send();
        }
        catch (error) {
            return res.status(400).send({ error: error.message || "Erro ao tentar reenviar email de confirmação" });
        }
    }
}
exports.ResendConfirmationEmailController = ResendConfirmationEmailController;
