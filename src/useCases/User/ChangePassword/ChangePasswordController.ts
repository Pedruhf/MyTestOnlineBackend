import { Request, Response } from "express";
import { ChangePasswordUseCase } from "./ChangePasswordUseCase";

class ChangePasswordController {
  private changePasswordUseCase: ChangePasswordUseCase;
  constructor(ChangePasswordUseCase: ChangePasswordUseCase) {
    this.changePasswordUseCase = ChangePasswordUseCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const id = req.userId;
    try {
      await this.changePasswordUseCase.execute(id, req.body);
      return res.send();
    } catch (error) {
      return res.status(400).send({ error: error.message || "Erro ao tentar alterar senha" });
    }
  }
}

export { ChangePasswordController };