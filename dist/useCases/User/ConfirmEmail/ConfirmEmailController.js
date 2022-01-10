"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmEmailController = void 0;
class ConfirmEmailController {
    constructor(confirmEmailUseCase) {
        this.confirmEmailUseCase = confirmEmailUseCase;
    }
    async handle(req, res) {
        const { id } = req.params;
        try {
            await this.confirmEmailUseCase.execute(id);
            return res.redirect("http://localhost:3000/confirmed-email");
        }
        catch (error) {
            return res.status(400).send({ error: error.message || "Erro ao tentar confirmar e-mail" });
        }
    }
}
exports.ConfirmEmailController = ConfirmEmailController;
