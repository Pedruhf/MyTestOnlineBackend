import { Request, Response } from "express";
import { Assessment } from "../../../models/AssessmentModel";
import { GetAssessmentUseCase } from "./GetAssessmentUseCase";

class GetAssessmentController {
  private getAssessmentUseCase: GetAssessmentUseCase;

  constructor(getAssessmentUseCase: GetAssessmentUseCase) {
    this.getAssessmentUseCase = getAssessmentUseCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const assessments = await this.getAssessmentUseCase.execute(req.userId, id);
      return res.send(assessments);
    } catch (error) {
      return res.status(400).send({ error: error.message || "Erro ao listar avaliações" });
    }
  }
}

export { GetAssessmentController };