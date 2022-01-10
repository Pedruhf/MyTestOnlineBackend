"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserController = void 0;
class DeleteUserController {
    constructor(deleteUserUseCase) {
        this.deleteUserUseCase = deleteUserUseCase;
    }
    async handle(req, res) {
        const id = req.userId;
        try {
            await this.deleteUserUseCase.execute(id);
            return res.send();
        }
        catch (error) {
            return res.status(400).send({ error: error.message || "Erro ao tentar deletar usuário" });
        }
    }
}
exports.DeleteUserController = DeleteUserController;
