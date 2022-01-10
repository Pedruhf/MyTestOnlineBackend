import { Request, Response } from "express";
import { UpdateQuestionUseCase } from "./UpdateQuestionUseCase";

class UpdateQuestionController {
  private updateQuestionUseCase: UpdateQuestionUseCase;

  constructor(updateQuestionUseCase: UpdateQuestionUseCase) {
    this.updateQuestionUseCase = updateQuestionUseCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const questions = await this.updateQuestionUseCase.execute(id, req.body);
      return res.send(questions);
    } catch (error) {
      return res.status(400).send({ error: error.message || "Erro ao atualizar questão" });
    }
  }
}

export { UpdateQuestionController };