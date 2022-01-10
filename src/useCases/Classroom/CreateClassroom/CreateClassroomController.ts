import { Request, Response } from "express";
import { CreateClassroomUseCase } from "./CreateClassroomUseCase";

class CreateClassroomController {
  private createClassroomUseCase: CreateClassroomUseCase;

  constructor(createClassroomUseCase: CreateClassroomUseCase) {
    this.createClassroomUseCase = createClassroomUseCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const userId = req.userId;

    try {
      const classroom = await this.createClassroomUseCase.execute(userId, req.body);
      return res.send(classroom);
    } catch (error) {
      return res.status(400).send({ error: error.message || "Erro ao tentar criar nova sala" });
    }
  }
}

export { CreateClassroomController };