import { IUsersRepository } from "../../../../data/repositories/contracts/IUsersRepository";
import { transporter as mailer } from "../../../../infra/services/nodeMailer";
import { emailConfirmationHTML } from "../../../../utils/email/emailConfirmationHTML";

class ResendConfirmationEmailUseCase {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(email: string): Promise<void> {
    const user = await this.usersRepository.findByEmail(email);
    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    if (user.emailConfirmed) {
      throw new Error("Este e-mail já foi confirmado");
    }

    await mailer.sendMail({
      to: email,
      from: process.env.MAIL_SENDER,
      subject: "Confirmação de e-mail",
      html: emailConfirmationHTML(user._id, user.name),
    });
  }
}

export { ResendConfirmationEmailUseCase };