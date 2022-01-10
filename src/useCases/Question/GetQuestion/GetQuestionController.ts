import { Request, Response } from "express";
import { GetQuestionUseCase } from "./GetQuestionUseCase";

class GetQuestionController {
  private getQuestionUseCase: GetQuestionUseCase;

  constructor(GetQuestionUseCase: GetQuestionUseCase) {
    this.getQuestionUseCase = GetQuestionUseCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const questions = await this.getQuestionUseCase.execute(id);
      return res.send(questions);
    } catch (error) {
      return res.status(400).send({ error: error.message || "Erro ao buscar questão" });
    }
  }
}

export { GetQuestionController };