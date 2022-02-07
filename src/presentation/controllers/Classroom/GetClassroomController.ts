import { Request, Response } from "express";
import { GetClassroomUseCase } from "../../../domain/useCases/Classroom/GetClassroom/GetClassroomUseCase";

class GetClassroomController {
  private getClassroomUseCase: GetClassroomUseCase;

  constructor(getClassroomUseCase: GetClassroomUseCase) {
    this.getClassroomUseCase = getClassroomUseCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const userId = req.userId;
    const { id } = req.params;

    try {
      const classrooms = await this.getClassroomUseCase.execute(userId, id);
      return res.send(classrooms);
    } catch (error) {
      return res.status(400).send({ error: error.message || "Erro ao buscar sala" });
    }
  }
}

export { GetClassroomController };