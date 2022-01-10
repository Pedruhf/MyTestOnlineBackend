import { IUsersRepository } from "../../../repositories/IUsersRepository";

class ConfirmEmailUseCase {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(id: string): Promise<void> {
    const user = await this.usersRepository.findById(id);
    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    if (user.emailConfirmed) {
      throw new Error("Este e-mail já foi confirmado");
    }

    user.emailConfirmed = true;
    await this.usersRepository.update(id, user);
  }
}

export { ConfirmEmailUseCase };