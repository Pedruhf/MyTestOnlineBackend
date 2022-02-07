import { Request, Response } from "express";
import { DeleteQuestionUseCase } from "../../../domain/useCases/Question/DeleteQuestion/DeleteQuestionUseCase";

class DeleteQuestionController {
  private deleteQuestionUseCase: DeleteQuestionUseCase;

  constructor(deleteQuestionUseCase: DeleteQuestionUseCase) {
    this.deleteQuestionUseCase = deleteQuestionUseCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      await this.deleteQuestionUseCase.execute(id);
      return res.send();
    } catch (error) {
      return res.status(400).send({ error: error.message || "Erro ao deletar questão" });
    }
  }
}

export { DeleteQuestionController };