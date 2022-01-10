"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUserController = void 0;
class ListUserController {
    constructor(listUserUseCase) {
        this.listUserUseCase = listUserUseCase;
    }
    async list(req, res) {
        const { email } = req.body;
        try {
            const user = await this.listUserUseCase.listByEmail(email);
            user.password = undefined;
            return res.send(user);
        }
        catch (error) {
            return res.status(404).send({ message: error.message || "Usuário não encontrado" });
        }
    }
}
exports.ListUserController = ListUserController;
