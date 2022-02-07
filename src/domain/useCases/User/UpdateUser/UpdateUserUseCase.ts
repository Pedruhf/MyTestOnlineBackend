import { IUsersRepository } from "../../../../data/repositories/contracts/IUsersRepository";
import { UpdateUserRequestDTO } from "./UpdateUserDTO";

class UpdateUserUseCase {
  private userRepository: IUsersRepository;

  constructor(userRepository: IUsersRepository) {
    this.userRepository = userRepository;
  }

  async execute(id: string, data: UpdateUserRequestDTO): Promise<void> {
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

export { UpdateUserUseCase };