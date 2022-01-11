import { Request, Response } from "express";
import { GetAnswerProfessorUseCase } from "./GetAnswerProfessorUseCase";

class GetAnswerProfessorController {
  private getAnswerUseCase: GetAnswerProfessorUseCase;

  constructor(getAnswerUseCase: GetAnswerProfessorUseCase) {
    this.getAnswerUseCase = getAnswerUseCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const userId = req.userId;
    const { assessmentId } = req.params;

    try {
      const answers = await this.getAnswerUseCase.execute(userId, assessmentId);
      return res.send(answers);
    } catch (error) {
      return res.status(400).send({ error: error.message || "Erro ao buscar respostas" });
    }
  }
}

export { GetAnswerProfessorController };