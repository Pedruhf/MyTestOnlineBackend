import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  private createUserUseCase: CreateUserUseCase;

  constructor(createUserUseCase: CreateUserUseCase) {
    this.createUserUseCase = createUserUseCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password, confirmPassword, name, age, isProfessor, picture } = req.body;

    try {
      await this.createUserUseCase.execute({
        email,
        password,
        confirmPassword,
        name,
        age,
        isProfessor,
        picture,
      });

      return res.status(201).send();
    } catch (error) {
      return res.status(400).json({ message: error.message || "Erro ao tentar realizar cadastro" });
    }
  }
}

export { CreateUserController };