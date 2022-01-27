import { User } from "../../../models/UserModel";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUseDTO";
import { createUserValidateFields } from "./CreateUserValidateFields";

class CreateUserUseCase {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email);
    if (userAlreadyExists) {
      throw new Error("Este usuário já está cadastrado");
    }

    createUserValidateFields(data);

    const user = new User(data);
    await this.usersRepository.save(user);
  }
}

export { CreateUserUseCase };