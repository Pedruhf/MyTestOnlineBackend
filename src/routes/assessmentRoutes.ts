import { Router } from "express";
import { authUser } from "../middlewares/auth";
import { professorUser } from "../middlewares/professor";
import {
  getAssessmentController,
  createAssessmentController,
  updateAssessmentController,
  deleteAssessmentController,
} from "../useCases/Assessment";

const assessmentRoutes = Router();

assessmentRoutes.use(authUser);

assessmentRoutes.get("/", professorUser, (req, res) => {
  return getAssessmentController.handle(req, res);
});

assessmentRoutes.get("/:id", (req, res) => {
  return getAssessmentController.handle(req, res);
});

assessmentRoutes.post("/", professorUser, (req, res) => {
  return createAssessmentController.handle(req, res);
});

assessmentRoutes.put("/:id", professorUser, (req, res) => {
  return updateAssessmentController.handle(req, res);
});

assessmentRoutes.delete("/:id", professorUser, (req, res) => {
  return deleteAssessmentController.handle(req, res);
});

export { assessmentRoutes };