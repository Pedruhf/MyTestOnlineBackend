import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { mongoUser } from "../../../models/UserModel";
import { transporter } from "../../../services/nodeMailer";
import { generateToken } from "../../../utils/generateToken";
import { forgotPasswordHTML } from "../../../utils/email/forgotPasswordHTML";

class ForgotPasswordUseCase {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(email: string): Promise<void> {
    const user = await mongoUser.findOne({ email }).select("+passwordResetToken");
    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    const passwordResetToken = generateToken({ id: user._id }, 3600);
    const passwordResetExpires = ((Number(new Date())) / 1000) + 3600;

    user.passwordResetToken = passwordResetToken;
    user.passwordResetExpires = passwordResetExpires;

    await this.usersRepository.update(user._id, user);
    await transporter.sendMail({
      to: email,
      from: process.env.MAIL_SENDER,
      subject: "Esqueceu sua senha?",
      html: forgotPasswordHTML(user.passwordResetToken, user.name),
    });
  }
}

export { ForgotPasswordUseCase };