"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUserUseCase = void 0;
class ListUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async listByEmail(email) {
        const user = await this.userRepository.findByEmail(email);
        if (!user) {
            throw new Error("Usuário não encontrado");
        }
        user.password = undefined;
        return user;
    }
}
exports.ListUserUseCase = ListUserUseCase;
