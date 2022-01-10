"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classroomRoutes = void 0;
const express_1 = require("express");
const auth_1 = require("../middlewares/auth");
const professor_1 = require("../middlewares/professor");
const Classroom_1 = require("../useCases/Classroom");
const classroomRoutes = (0, express_1.Router)();
exports.classroomRoutes = classroomRoutes;
classroomRoutes.use(auth_1.authUser);
classroomRoutes.get("/", professor_1.professorUser, (req, res) => {
    return Classroom_1.getClassroomController.handle(req, res);
});
classroomRoutes.get("/:id", (req, res) => {
    return Classroom_1.getClassroomController.handle(req, res);
});
classroomRoutes.post("/", professor_1.professorUser, (req, res) => {
    return Classroom_1.createClassroomController.handle(req, res);
});
classroomRoutes.put("/:id", professor_1.professorUser, (req, res) => {
    return Classroom_1.updateClassroomController.handle(req, res);
});
classroomRoutes.delete("/:id", professor_1.professorUser, (req, res) => {
    return Classroom_1.deleteClassroomController.handle(req, res);
});
