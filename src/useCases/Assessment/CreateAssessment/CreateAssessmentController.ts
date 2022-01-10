import { Request, Response } from "express";
import { CreateAssessmentUseCase } from "./CreateAssessmentUseCase";

class CreateAssessmentController {
  private createAssessmentUseCase: CreateAssessmentUseCase;

  constructor(createAssessmentUseCase: CreateAssessmentUseCase) {
    this.createAssessmentUseCase = createAssessmentUseCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const userId = req.userId;

    try {
      await this.createAssessmentUseCase.execute(userId, req.body);
      return res.send();
    } catch (error) {
      return res.status(400).send({ error: error.message || "Erro ao tentar criar nova avaliação" });
    }
  }
}

export { CreateAssessmentController };