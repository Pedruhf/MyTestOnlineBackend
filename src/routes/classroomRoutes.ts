import { Router } from "express";
import { authUser } from "../middlewares/auth";
import { professorUser } from "../middlewares/professor";
import {
  getClassroomController,
  createClassroomController,
  updateClassroomController,
  deleteClassroomController,
} from "../useCases/Classroom";

const classroomRoutes = Router();

classroomRoutes.use(authUser);

classroomRoutes.get("/", professorUser, (req, res) => {
  return getClassroomController.handle(req, res);
});

classroomRoutes.get("/:id", (req, res) => {
  return getClassroomController.handle(req, res);
});

classroomRoutes.post("/", professorUser, (req, res) => {
  return createClassroomController.handle(req, res);
});

classroomRoutes.put("/:id", professorUser, (req, res) => {
  return updateClassroomController.handle(req, res);
});

classroomRoutes.delete("/:id", professorUser, (req, res) => {
  return deleteClassroomController.handle(req, res);
});

export { classroomRoutes };