"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmEmailUseCase = void 0;
class ConfirmEmailUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(id) {
        const user = await this.usersRepository.findById(id);
        if (!user) {
            throw new Error("Usuário não encontrado");
        }
        if (user.emailConfirmed) {
            throw new Error("Este e-mail já foi confirmado");
        }
        user.emailConfirmed = true;
        await this.usersRepository.update(id, user);
    }
}
exports.ConfirmEmailUseCase = ConfirmEmailUseCase;
