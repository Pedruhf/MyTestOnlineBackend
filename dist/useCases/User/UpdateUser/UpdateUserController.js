"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserController = void 0;
class UpdateUserController {
    constructor(updateUserUseCase) {
        this.updateUserUseCase = updateUserUseCase;
    }
    async handle(req, res) {
        try {
            req.body.password = undefined;
            req.body.confirmedEmail = undefined;
            await this.updateUserUseCase.execute(req.userId, req.body);
            return res.send();
        }
        catch (error) {
            return res.status(400).send({ error: error.message || "Erro ao tentar atualizar informações" });
        }
    }
}
exports.UpdateUserController = UpdateUserController;
