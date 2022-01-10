import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

class UpdateUserController {
  private updateUserUseCase: UpdateUserUseCase;

  constructor(updateUserUseCase: UpdateUserUseCase) {
    this.updateUserUseCase = updateUserUseCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      req.body.password = undefined;
      req.body.confirmedEmail = undefined;
      
      await this.updateUserUseCase.execute(req.userId, req.body);
      return res.send();
    } catch (error) {
      return res.status(400).send({ error: error.message || "Erro ao tentar atualizar informações" });
    }
  }
}

export { UpdateUserController };