import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { mongoUser } from "../../../models/UserModel";
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
    const user = await mongoUser.findOne({ passwordResetToken: token }).select("+passwordResetToken +passwordResetExpires");
    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    const now = (Number(new Date())) / 1000;
    if (now > user.passwordResetExpires) {
      throw new Error("Token expirado");
    }

    const newPassword = generatePassword();
    const newPasswordEncrypted = bcrypt.hashSync(newPassword, 10);

    user.password = newPasswordEncrypted;
    user.passwordResetExpires = now;

    await this.usersRepository.update(user._id, user);

    await mailer.sendMail({
      to: user.email,
      from: process.env.MAIL_SENDER,
      subject: "Sua nova senha",
      html: resetedPasswordHTML(user.name, newPassword),
    });
  }
}

export { ResetPasswordUseCase };