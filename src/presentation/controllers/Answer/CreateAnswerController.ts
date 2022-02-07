import { Request, Response } from "express";
import { CreateAnswerUseCase } from "../../../domain/useCases/Answer/CreateAnswer/CreateAnswerUseCase";

class CreateAnswerController {
  private createAnswerUseCase: CreateAnswerUseCase;

  constructor(createAnswerUseCase: CreateAnswerUseCase) {
    this.createAnswerUseCase = createAnswerUseCase;
  }

  async handle(req: Request, res: Response): Promise<Response>{
    const userId = req.userId;

    try {
      const answer = await this.createAnswerUseCase.execute(userId, req.body);
      return res.send(answer);
    } catch (error) {
      return res.status(400).send({ error: error.message || "Erro ao tentar enviar respostas" });
    }
  }
}

export { CreateAnswerController };