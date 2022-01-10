"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAssessmentUseCase = void 0;
class GetAssessmentUseCase {
    constructor(assessmentsRepository) {
        this.assessmentsRepository = assessmentsRepository;
    }
    async execute(userId, id) {
        if (id) {
            const assessment = await this.assessmentsRepository.findById(id);
            if (!assessment) {
                throw new Error("Avaliação não encontrada");
            }
            if (assessment.user._id.valueOf() !== userId) {
                throw new Error("Esta avaliação não pertence a este usuário");
            }
            return assessment;
        }
        const assessments = await this.assessmentsRepository.findAll();
        if (!assessments) {
            throw new Error("Avaliações não encontradas");
        }
        return assessments.filter(assessment => assessment.user._id.valueOf() === userId);
    }
}
exports.GetAssessmentUseCase = GetAssessmentUseCase;
