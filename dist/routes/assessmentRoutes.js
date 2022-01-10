"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assessmentRoutes = void 0;
const express_1 = require("express");
const auth_1 = require("../middlewares/auth");
const professor_1 = require("../middlewares/professor");
const Assessment_1 = require("../useCases/Assessment");
const assessmentRoutes = (0, express_1.Router)();
exports.assessmentRoutes = assessmentRoutes;
assessmentRoutes.use(auth_1.authUser);
assessmentRoutes.get("/", professor_1.professorUser, (req, res) => {
    return Assessment_1.getAssessmentController.handle(req, res);
});
assessmentRoutes.get("/:id", (req, res) => {
    return Assessment_1.getAssessmentController.handle(req, res);
});
assessmentRoutes.post("/", professor_1.professorUser, (req, res) => {
    return Assessment_1.createAssessmentController.handle(req, res);
});
assessmentRoutes.put("/:id", professor_1.professorUser, (req, res) => {
    return Assessment_1.updateAssessmentController.handle(req, res);
});
assessmentRoutes.delete("/:id", professor_1.professorUser, (req, res) => {
    return Assessment_1.deleteAssessmentController.handle(req, res);
});
