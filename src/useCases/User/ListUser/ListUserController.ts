import { Request, Response } from "express";
import { ListUserUseCase } from "./ListUserUseCase";

class ListUserController {
  private listUserUseCase: ListUserUseCase;

  constructor(listUserUseCase: ListUserUseCase) {
    this.listUserUseCase = listUserUseCase;
  }


  async list(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;

    try {
      const user = await this.listUserUseCase.listByEmail(email);
      user.password = undefined;
      return res.send(user);
    } catch (error) {
      return res.status(404).send({ message: error.message || "Usuário não encontrado"});
    }
  }
}

export { ListUserController };