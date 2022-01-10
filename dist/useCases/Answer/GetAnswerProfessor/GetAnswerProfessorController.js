"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAnswerProfessorController = void 0;
class GetAnswerProfessorController {
    constructor(getAnswerUseCase) {
        this.getAnswerUseCase = getAnswerUseCase;
    }
    async handle(req, res) {
        const userId = req.userId;
        try {
            const answers = await this.getAnswerUseCase.execute(userId);
            return res.send(answers);
        }
        catch (error) {
            return res.status(400).send({ error: error.message || "Erro ao buscar respostas" });
        }
    }
}
exports.GetAnswerProfessorController = GetAnswerProfessorController;
