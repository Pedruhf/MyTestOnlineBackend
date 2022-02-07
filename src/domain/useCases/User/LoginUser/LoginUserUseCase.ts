import { IUsersRepository } from "../../../../data/repositories/contracts/IUsersRepository";
import { ILoginUserResponseDTO } from "./LoginUserResponseDTO";
import { generateToken } from "../../../../utils/generateToken";
import bcrypt from "bcrypt";

class LoginUserUseCase {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(email: string, password: string): Promise<ILoginUserResponseDTO> {
    const user = await this.usersRepository.findByEmail(email);
    if (!user) {
      throw new Error("E-mail inválido");
    }

    const equalsPassword = bcrypt.compareSync(password, user.password);

    if (!equalsPassword) {
      throw new Error("Senha incorreta");
    }

    if (!user.emailConfirmed) {
      throw new Error("Confirmação de e-mail pendente");
    }

    user.password = undefined;

    return {
      user,
      token: generateToken({ id: user._id }),
    };
  }
}

export { LoginUserUseCase };