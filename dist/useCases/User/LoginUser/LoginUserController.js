"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUserController = void 0;
class LoginUserController {
    constructor(loginUserUseCase) {
        this.loginUserUseCase = loginUserUseCase;
    }
    async handle(req, res) {
        const { email, password } = req.body;
        try {
            const data = await this.loginUserUseCase.execute(email, password);
            return res.send(data);
        }
        catch (error) {
            return res.status(400).send({ error: error.message || "Erro ao tentar fazer login" });
        }
    }
}
exports.LoginUserController = LoginUserController;
