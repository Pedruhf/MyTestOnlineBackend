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

    await this.usersRepository.save(data);
  }
}

export { CreateUserUseCase };