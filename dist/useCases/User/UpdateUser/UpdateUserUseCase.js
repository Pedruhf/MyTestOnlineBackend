"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserUseCase = void 0;
class UpdateUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(id, data) {
        const user = await this.userRepository.findById(id);
        if (!user) {
            throw new Error("Usuário não encontrado");
        }
        const emailExists = await this.userRepository.findByEmail(data.email);
        if (emailExists && data.email !== user.email) {
            throw new Error("Este e-mail já está cadastrado");
        }
        await this.userRepository.update(id, data);
    }
}
exports.UpdateUserUseCase = UpdateUserUseCase;
