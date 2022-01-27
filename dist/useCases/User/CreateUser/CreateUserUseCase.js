"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const UserModel_1 = require("../../../models/UserModel");
const CreateUserValidateFields_1 = require("./CreateUserValidateFields");
class CreateUserUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(data) {
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email);
        if (userAlreadyExists) {
            throw new Error("Este usuário já está cadastrado");
        }
        (0, CreateUserValidateFields_1.createUserValidateFields)(data);
        const user = new UserModel_1.User(data);
        await this.usersRepository.save(user);
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
