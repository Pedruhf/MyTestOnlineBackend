"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserUseCase = void 0;
class DeleteUserUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(id) {
        const userIndex = await this.usersRepository.findById(id);
        if (!userIndex) {
            throw new Error("Usuário não encontrado");
        }
        await this.usersRepository.delete(id);
    }
}
exports.DeleteUserUseCase = DeleteUserUseCase;
