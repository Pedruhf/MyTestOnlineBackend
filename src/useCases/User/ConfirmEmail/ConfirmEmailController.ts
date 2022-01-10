import { Request, Response } from "express";
import { ConfirmEmailUseCase } from "./ConfirmEmailUseCase";

class ConfirmEmailController {
  private confirmEmailUseCase: ConfirmEmailUseCase;
  constructor(confirmEmailUseCase: ConfirmEmailUseCase) {
    this.confirmEmailUseCase = confirmEmailUseCase;
  }

  async handle(req: Request, res: Response): Promise<Response | void> {
    const { id } = req.params;
    try {
      await this.confirmEmailUseCase.execute(id);
      return res.redirect("http://localhost:3000/confirmed-email");
    } catch (error) {
      return res.status(400).send({ error: error.message || "Erro ao tentar confirmar e-mail" });
    }
  }
}

export { ConfirmEmailController };