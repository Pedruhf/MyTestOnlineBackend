import { Request, Response } from "express";
import { UpdateAssessmentUseCase } from "./UpdateAssessmentUseCase";

class UpdateAssessmentController {
  private updateAssessmentUseCase: UpdateAssessmentUseCase;

  constructor(updateAssessmentUseCase: UpdateAssessmentUseCase) {
    this.updateAssessmentUseCase = updateAssessmentUseCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      await this.updateAssessmentUseCase.execute(id, req.body);
      return res.send();
    } catch (error) {
      return res.status(400).send({ error: error.message || "Erro ao tentar atualizar avaliação" });
    }
  }
}

export { UpdateAssessmentController };