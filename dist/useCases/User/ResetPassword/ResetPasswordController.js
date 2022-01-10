"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetPasswordController = void 0;
class ResetPasswordController {
    constructor(resetPasswordUseCase) {
        this.resetPasswordUseCase = resetPasswordUseCase;
    }
    async handle(req, res) {
        const { token } = req.params;
        try {
            await this.resetPasswordUseCase.execute(token);
            return res.redirect("http://localhost:3000/reseted-password");
        }
        catch (error) {
            return res.status(400).send({ error: error.message || "Erro ao tentar redefinir senha" });
        }
    }
}
exports.ResetPasswordController = ResetPasswordController;
