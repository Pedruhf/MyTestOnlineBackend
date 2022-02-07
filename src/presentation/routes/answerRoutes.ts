import { Router } from "express";
import { authUser } from "../../main/middlewares/auth";
import { professorUser } from "../../main/middlewares/professor";
import {
  getAnswerProfessorController,
  createAnswerController,
} from "../../domain/useCases/Answer";

const answerRoutes = Router();

answerRoutes.use(authUser);

answerRoutes.get("/:assessmentId", professorUser, (req, res) => {
  return getAnswerProfessorController.handle(req, res);
});

answerRoutes.post("/", (req, res) => {
  return createAnswerController.handle(req, res);
});


export { answerRoutes };