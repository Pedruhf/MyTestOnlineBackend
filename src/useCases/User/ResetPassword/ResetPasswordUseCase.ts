import { IUsersRepository } from "../../../repositories/IUsersRepository";
import bcrypt from "bcrypt";
import { generatePassword } from "../../../utils/generateNewPassword";
import { transporter as mailer } from "../../../services/nodeMailer";
import { resetedPasswordHTML } from "../../../utils/email/resetedPasswordHTML";

class ResetPasswordUseCase {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(token: string): Promise<void> {
    const user = await this.usersRepository.findByResetToken(token);
    if (!user) {
      throw new Error("Usuário não encontrado");
    }
    
    const now = Date.now() / 1000;
    if (now > user.passwordResetExpires) {
      throw new Error("Token expirado");
    }

    const newPassword = generatePassword();
    const newPasswordEncrypted = bcrypt.hashSync(newPassword, 10);
    
    user.password = newPasswordEncrypted;
    user.passwordResetExpires = now;
    
    await this.usersRepository.update(user.id, user);

    await mailer.sendMail({
      to: user.email,
      from: process.env.MAIL_SENDER,
      subject: "Sua nova senha",
      html: resetedPasswordHTML(user.name, newPassword),
    });
  }
}

export { ResetPasswordUseCase };