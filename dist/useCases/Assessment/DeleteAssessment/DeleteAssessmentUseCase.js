"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAssessmentUseCase = void 0;
class DeleteAssessmentUseCase {
    constructor(assessmentsRepository) {
        this.assessmentsRepository = assessmentsRepository;
    }
    async execute(id) {
        if (!id.trim()) {
            throw new Error("ID de avaliação inválido");
        }
        await this.assessmentsRepository.delete(id);
    }
}
exports.DeleteAssessmentUseCase = DeleteAssessmentUseCase;
