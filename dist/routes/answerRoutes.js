"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.answerRoutes = void 0;
const express_1 = require("express");
const auth_1 = require("../middlewares/auth");
const professor_1 = require("../middlewares/professor");
const Answer_1 = require("../useCases/Answer");
const answerRoutes = (0, express_1.Router)();
exports.answerRoutes = answerRoutes;
answerRoutes.use(auth_1.authUser);
answerRoutes.get("/:assessmentId", professor_1.professorUser, (req, res) => {
    return Answer_1.getAnswerProfessorController.handle(req, res);
});
answerRoutes.post("/", (req, res) => {
    return Answer_1.createAnswerController.handle(req, res);
});
