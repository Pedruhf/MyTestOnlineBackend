"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUserUseCase = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const generateToken_1 = require("../../../utils/generateToken");
class LoginUserUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(email, password) {
        const user = await this.usersRepository.findByEmail(email);
        if (!user) {
            throw new Error("E-mail inválido");
        }
        const equalsPassword = bcrypt_1.default.compareSync(password, user.password);
        if (!equalsPassword) {
            throw new Error("Senha incorreta");
        }
        if (!user.emailConfirmed) {
            throw new Error("Confirmação de e-mail pendente");
        }
        user.password = undefined;
        return {
            user,
            token: (0, generateToken_1.generateToken)({ id: user._id }),
        };
    }
}
exports.LoginUserUseCase = LoginUserUseCase;
