import { Request, Response } from "express";
import { DeleteClassroomUseCase } from "../../../domain/useCases/Classroom/DeleteClassroom/DeleteClassroomUseCase";

class DeleteClassroomController {
  private deleteClassroomUseCase: DeleteClassroomUseCase;

  constructor(deleteClassroomUseCase: DeleteClassroomUseCase) {
    this.deleteClassroomUseCase = deleteClassroomUseCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      await this.deleteClassroomUseCase.execute(id);
      return res.send();
    } catch (error) {
      return res.status(400).send({ error: error.message || "Erro ao deletar sala" });
    }
  }
}

export { DeleteClassroomController };