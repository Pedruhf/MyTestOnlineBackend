"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteQuestionController = void 0;
class DeleteQuestionController {
    constructor(deleteQuestionUseCase) {
        this.deleteQuestionUseCase = deleteQuestionUseCase;
    }
    async handle(req, res) {
        const { id } = req.params;
        try {
            await this.deleteQuestionUseCase.execute(id);
            return res.send();
        }
        catch (error) {
            return res.status(400).send({ error: error.message || "Erro ao deletar questão" });
        }
    }
}
exports.DeleteQuestionController = DeleteQuestionController;
