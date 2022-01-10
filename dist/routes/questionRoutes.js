"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionRoutes = void 0;
const express_1 = require("express");
const auth_1 = require("../middlewares/auth");
const professor_1 = require("../middlewares/professor");
const Question_1 = require("../useCases/Question");
const questionRoutes = (0, express_1.Router)();
exports.questionRoutes = questionRoutes;
questionRoutes.use(auth_1.authUser);
questionRoutes.use(professor_1.professorUser);
questionRoutes.get("/", (req, res) => {
    return Question_1.getQuestionController.handle(req, res);
});
questionRoutes.get("/:id", (req, res) => {
    return Question_1.getQuestionController.handle(req, res);
});
questionRoutes.post("/", (req, res) => {
    return Question_1.createQuestionController.handle(req, res);
});
questionRoutes.put("/:id", (req, res) => {
    return Question_1.updateQuestionController.handle(req, res);
});
questionRoutes.delete("/:id", (req, res) => {
    return Question_1.deleteQuestionController.handle(req, res);
});
