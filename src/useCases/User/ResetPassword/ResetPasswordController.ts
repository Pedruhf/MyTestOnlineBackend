import { Request, Response } from "express";
import { ResetPasswordUseCase } from "./ResetPasswordUseCase";

class ResetPasswordController {
  private resetPasswordUseCase: ResetPasswordUseCase;
  constructor(resetPasswordUseCase: ResetPasswordUseCase) {
    this.resetPasswordUseCase = resetPasswordUseCase;
  }

  async handle(req: Request, res: Response): Promise<Response | void> {
    const { token } = req.params;

    try {
      await this.resetPasswordUseCase.execute(token);
      return res.redirect("http://localhost:3000/reseted-password");
    } catch (error) {
      return res.status(400).send({ error: error.message || "Erro ao tentar redefinir senha" });
    }
  }
}

export { ResetPasswordController };