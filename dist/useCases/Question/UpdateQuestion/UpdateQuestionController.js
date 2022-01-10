"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateQuestionController = void 0;
class UpdateQuestionController {
    constructor(updateQuestionUseCase) {
        this.updateQuestionUseCase = updateQuestionUseCase;
    }
    async handle(req, res) {
        const { id } = req.params;
        try {
            const questions = await this.updateQuestionUseCase.execute(id, req.body);
            return res.send(questions);
        }
        catch (error) {
            return res.status(400).send({ error: error.message || "Erro ao atualizar questão" });
        }
    }
}
exports.UpdateQuestionController = UpdateQuestionController;
