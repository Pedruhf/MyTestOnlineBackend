"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAssessmentController = void 0;
class UpdateAssessmentController {
    constructor(updateAssessmentUseCase) {
        this.updateAssessmentUseCase = updateAssessmentUseCase;
    }
    async handle(req, res) {
        const { id } = req.params;
        try {
            await this.updateAssessmentUseCase.execute(id, req.body);
            return res.send();
        }
        catch (error) {
            return res.status(400).send({ error: error.message || "Erro ao tentar atualizar avaliação" });
        }
    }
}
exports.UpdateAssessmentController = UpdateAssessmentController;
