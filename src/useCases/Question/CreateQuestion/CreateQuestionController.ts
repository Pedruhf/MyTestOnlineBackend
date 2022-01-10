import { Request, Response } from "express";
import { CreateQuestionUseCase } from "./CreateQuestionUseCase";

class CreateQuestionController {
  private createQuestionUseCase: CreateQuestionUseCase;

  constructor(createQuestionUseCase: CreateQuestionUseCase) {
    this.createQuestionUseCase = createQuestionUseCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      await this.createQuestionUseCase.execute(req.body);
      return res.send();
    } catch (error) {
      return res.status(400).send({ error: error.message || "Erro ao criar questão" });
    }
  }
}

export { CreateQuestionController };