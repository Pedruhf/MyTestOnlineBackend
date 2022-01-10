import { Request, Response } from "express";
import { ForgotPasswordUseCase } from "./ForgotPasswordUseCase";

class ForgotPasswordController {
  private forgotPasswordUseCase: ForgotPasswordUseCase;
  constructor(forgotPasswordUseCase: ForgotPasswordUseCase) {
    this.forgotPasswordUseCase = forgotPasswordUseCase;
  }

  async handle(req: Request, res: Response): Promise<Response | void> {
    const { email } = req.body;
    try {
      await this.forgotPasswordUseCase.execute(email);
      return res.send();
    } catch (error) {
      return res.status(400).send({ error: error.message || "Erro ao tentar enviar e-mail" });
    }
  }
}

export { ForgotPasswordController };