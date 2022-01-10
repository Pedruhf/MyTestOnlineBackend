import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

class DeleteUserController {
  private deleteUserUseCase: DeleteUserUseCase;

  constructor(deleteUserUseCase: DeleteUserUseCase) {
    this.deleteUserUseCase = deleteUserUseCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const id = req.userId;

    try {
      await this.deleteUserUseCase.execute(id);
      return res.send();
    } catch (error) {
      return res.status(400).send({ error: error.message || "Erro ao tentar deletar usuário" });
    }
  }
}

export { DeleteUserController };