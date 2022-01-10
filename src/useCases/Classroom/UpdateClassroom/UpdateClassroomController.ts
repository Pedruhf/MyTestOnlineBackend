import { Request, Response } from "express";
import { UpdateClassroomUseCase } from "./UpdateClassroomUseCase";

class UpdateClassroomController {
  private updateClassroomUseCase: UpdateClassroomUseCase;

  constructor(updateClassroomUseCase: UpdateClassroomUseCase) {
    this.updateClassroomUseCase = updateClassroomUseCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      await this.updateClassroomUseCase.execute(id, req.body);
      return res.send();
    } catch (error) {
      return res.status(400).send({ error: error.message || "Erro ao atualizar informações da sala" });
    }
  }
}

export { UpdateClassroomController };