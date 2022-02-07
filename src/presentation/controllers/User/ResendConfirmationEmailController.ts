import { Request, Response } from "express";
import { ResendConfirmationEmailUseCase } from "../../../domain/useCases/User/ResendConfirmationEmail/ResendConfirmationEmailUseCase";

class ResendConfirmationEmailController {
  private resendConfirmationUseCase: ResendConfirmationEmailUseCase;

  constructor(resendConfirmationUseCase: ResendConfirmationEmailUseCase) {
    this.resendConfirmationUseCase = resendConfirmationUseCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;

    try {
      await this.resendConfirmationUseCase.execute(email);
      return res.send();
    } catch (error) {
      return res.status(400).send({ error: error.message || "Erro ao tentar reenviar email de confirmação" });
    }
  }
}

export { ResendConfirmationEmailController };