"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangePasswordController = void 0;
class ChangePasswordController {
    constructor(ChangePasswordUseCase) {
        this.changePasswordUseCase = ChangePasswordUseCase;
    }
    async handle(req, res) {
        const id = req.userId;
        try {
            await this.changePasswordUseCase.execute(id, req.body);
            return res.send();
        }
        catch (error) {
            return res.status(400).send({ error: error.message || "Erro ao tentar alterar senha" });
        }
    }
}
exports.ChangePasswordController = ChangePasswordController;
