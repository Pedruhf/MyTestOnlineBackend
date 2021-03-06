import { Router } from "express";
import { authUser } from "../middlewares/auth";
import { professorUser } from "../middlewares/professor";
import {
  getQuestionController,
  createQuestionController,
  updateQuestionController,
  deleteQuestionController,
} from "../useCases/Question";

const questionRoutes = Router();

questionRoutes.use(authUser);
questionRoutes.use(professorUser);

questionRoutes.get("/", (req, res) => {
  return getQuestionController.handle(req, res);
});

questionRoutes.get("/:id", (req, res) => {
  return getQuestionController.handle(req, res);
});

questionRoutes.post("/", (req, res) => {
  return createQuestionController.handle(req, res);
});

questionRoutes.put("/:id", (req, res) => {
  return updateQuestionController.handle(req, res);
});

questionRoutes.delete("/:id", (req, res) => {
  return deleteQuestionController.handle(req, res);
});

export { questionRoutes };