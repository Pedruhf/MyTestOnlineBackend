import { Request, Response } from "express";
import { LoginUserUseCase } from "./LoginUserUseCase";

class LoginUserController {
  private loginUserUseCase: LoginUserUseCase;

  constructor(loginUserUseCase: LoginUserUseCase) {
    this.loginUserUseCase = loginUserUseCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    try {
      const data = await this.loginUserUseCase.execute(email, password);
      return res.send(data);
    } catch (error) {
      return res.status(400).send({ error: error.message || "Erro ao tentar fazer login" });
    }
  }
}

export { LoginUserController };