import { NextFunction, Request, Response } from "express";
import { usersRepository } from "../useCases/User";

async function professorUser(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  const userId = req.userId;

  const user = await usersRepository.findById(userId);
  if (!user.isProfessor) {
    return res.status(401).send({ error: "É necessário ser um professor para realizar esta operação" });
  }

  req.professorUser = true;
  return next();
}

export { professorUser };