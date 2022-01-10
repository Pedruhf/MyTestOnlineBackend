"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAssessmentController = void 0;
class DeleteAssessmentController {
    constructor(deleteAssessmentUseCase) {
        this.deleteAssessmentUseCase = deleteAssessmentUseCase;
    }
    async handle(req, res) {
        const { id } = req.params;
        try {
            await this.deleteAssessmentUseCase.execute(id);
            return res.send();
        }
        catch (error) {
            return res.status(400).send({ error: error.message || "Erro ao tentar deletar avaliação" });
        }
    }
}
exports.DeleteAssessmentController = DeleteAssessmentController;
