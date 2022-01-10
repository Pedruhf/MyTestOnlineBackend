"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgotPasswordController = void 0;
class ForgotPasswordController {
    constructor(forgotPasswordUseCase) {
        this.forgotPasswordUseCase = forgotPasswordUseCase;
    }
    async handle(req, res) {
        const { email } = req.body;
        try {
            await this.forgotPasswordUseCase.execute(email);
            return res.send();
        }
        catch (error) {
            return res.status(400).send({ error: error.message || "Erro ao tentar enviar e-mail" });
        }
    }
}
exports.ForgotPasswordController = ForgotPasswordController;
