import { Request, Response } from "express";
import { DeleteAssessmentUseCase } from "./DeleteAssessmentUseCase";

class DeleteAssessmentController {
  private deleteAssessmentUseCase: DeleteAssessmentUseCase;

  constructor(deleteAssessmentUseCase: DeleteAssessmentUseCase) {
    this.deleteAssessmentUseCase = deleteAssessmentUseCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      await this.deleteAssessmentUseCase.execute(id);
      return res.send();
    } catch (error) {
      return res.status(400).send({ error: error.message || "Erro ao tentar deletar avaliação" });
    }
  }
}

export { DeleteAssessmentController };