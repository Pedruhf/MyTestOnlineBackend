import { IUsersRepository } from "../../../../data/repositories/contracts/IUsersRepository";
import { ChangePasswordRequestDTO } from "./ChangePasswordDTO";
import bcrypt from "bcrypt";

class ChangePasswordUseCase {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(id: string, data: ChangePasswordRequestDTO): Promise<void> {
    const user = await this.usersRepository.findById(id);
    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    const equalsPassword = bcrypt.compareSync(data.currentPassword, user.password);
    if (!equalsPassword)  {
      throw new Error("Senha atual incorreta");
    }

    if (data.newPassword !== data.confirmNewPassword) {
      throw new Error("Senha de confirmação incorreta");
    }

    const newPasswordEncrypted = bcrypt.hashSync(data.newPassword, 10);
    user.password = newPasswordEncrypted;
    
    await this.usersRepository.update(id, user);
  }
}

export { ChangePasswordUseCase };