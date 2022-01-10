"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAssessmentController = void 0;
class CreateAssessmentController {
    constructor(createAssessmentUseCase) {
        this.createAssessmentUseCase = createAssessmentUseCase;
    }
    async handle(req, res) {
        const userId = req.userId;
        try {
            await this.createAssessmentUseCase.execute(userId, req.body);
            return res.send();
        }
        catch (error) {
            return res.status(400).send({ error: error.message || "Erro ao tentar criar nova avaliação" });
        }
    }
}
exports.CreateAssessmentController = CreateAssessmentController;
