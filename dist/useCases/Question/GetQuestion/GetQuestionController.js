"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetQuestionController = void 0;
class GetQuestionController {
    constructor(GetQuestionUseCase) {
        this.getQuestionUseCase = GetQuestionUseCase;
    }
    async handle(req, res) {
        const { id } = req.params;
        try {
            const questions = await this.getQuestionUseCase.execute(id);
            return res.send(questions);
        }
        catch (error) {
            return res.status(400).send({ error: error.message || "Erro ao buscar questão" });
        }
    }
}
exports.GetQuestionController = GetQuestionController;
