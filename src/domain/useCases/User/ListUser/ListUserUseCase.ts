import { User } from "../../../entities/UserModel";
import { IUsersRepository } from "../../../../data/repositories/contracts/IUsersRepository";

class ListUserUseCase {
  private userRepository: IUsersRepository;

  constructor(userRepository: IUsersRepository) {
    this.userRepository = userRepository;
  }

  async listByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    user.password = undefined;

    return user;
  }
}

export { ListUserUseCase };