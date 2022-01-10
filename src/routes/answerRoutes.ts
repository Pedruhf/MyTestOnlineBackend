import { Router } from "express";
import { authUser } from "../middlewares/auth";
import { professorUser } from "../middlewares/professor";
import {
  getAnswerProfessorController,
  createAnswerController,
} from "../useCases/Answer";

const answerRoutes = Router();

answerRoutes.use(authUser);

answerRoutes.get("/", professorUser, (req, res) => {
  return getAnswerProfessorController.handle(req, res);
});

answerRoutes.post("/", (req, res) => {
  return createAnswerController.handle(req, res);
});


export { answerRoutes };