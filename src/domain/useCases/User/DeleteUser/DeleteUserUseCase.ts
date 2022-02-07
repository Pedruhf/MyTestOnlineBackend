import { IUsersRepository } from "../../../../data/repositories/contracts/IUsersRepository";

class DeleteUserUseCase {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(id: string): Promise<void> {
    const userIndex = await this.usersRepository.findById(id);
    if (!userIndex) {
      throw new Error("Usuário não encontrado");
    }

    await this.usersRepository.delete(id);
  }
}

export { DeleteUserUseCase };