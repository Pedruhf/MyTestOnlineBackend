"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
class CreateUserController {
    constructor(createUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }
    async handle(req, res) {
        const { email, password, confirmPassword, name, age, isProfessor, picture } = req.body;
        try {
            await this.createUserUseCase.execute({
                email,
                password,
                confirmPassword,
                name,
                age,
                isProfessor,
                picture,
            });
            return res.status(201).send();
        }
        catch (error) {
            return res.status(400).json({ message: error.message || "Erro ao tentar realizar cadastro" });
        }
    }
}
exports.CreateUserController = CreateUserController;
