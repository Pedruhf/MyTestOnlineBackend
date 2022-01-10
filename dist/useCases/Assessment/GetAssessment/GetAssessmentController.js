"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAssessmentController = void 0;
class GetAssessmentController {
    constructor(getAssessmentUseCase) {
        this.getAssessmentUseCase = getAssessmentUseCase;
    }
    async handle(req, res) {
        const { id } = req.params;
        try {
            const assessments = await this.getAssessmentUseCase.execute(req.userId, id);
            return res.send(assessments);
        }
        catch (error) {
            return res.status(400).send({ error: error.message || "Erro ao listar avaliações" });
        }
    }
}
exports.GetAssessmentController = GetAssessmentController;
