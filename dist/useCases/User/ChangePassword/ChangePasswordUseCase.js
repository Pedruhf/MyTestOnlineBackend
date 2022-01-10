"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangePasswordUseCase = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
class ChangePasswordUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(id, data) {
        const user = await this.usersRepository.findById(id);
        if (!user) {
            throw new Error("Usuário não encontrado");
        }
        const equalsPassword = bcrypt_1.default.compareSync(data.currentPassword, user.password);
        if (!equalsPassword) {
            throw new Error("Senha atual incorreta");
        }
        if (data.newPassword !== data.confirmNewPassword) {
            throw new Error("Senha de confirmação incorreta");
        }
        const newPasswordEncrypted = bcrypt_1.default.hashSync(data.newPassword, 10);
        user.password = newPasswordEncrypted;
        await this.usersRepository.update(id, user);
    }
}
exports.ChangePasswordUseCase = ChangePasswordUseCase;
