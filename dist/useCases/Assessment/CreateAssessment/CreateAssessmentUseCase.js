"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAssessmentUseCase = void 0;
const AssessmentModel_1 = require("../../../models/AssessmentModel");
class CreateAssessmentUseCase {
    constructor(assessmentsRepository) {
        this.assessmentsRepository = assessmentsRepository;
    }
    async execute(userId, data) {
        if (!data.title.trim()) {
            throw new Error("É necessário informar um título válido");
        }
        if (!userId) {
            throw new Error("A avaliação deve estar vinculada a algum usuário");
        }
        const assessment = new AssessmentModel_1.Assessment({
            title: data.title,
            description: data.description,
            user: userId,
            questions: [],
        });
        await this.assessmentsRepository.save(assessment);
    }
}
exports.CreateAssessmentUseCase = CreateAssessmentUseCase;
