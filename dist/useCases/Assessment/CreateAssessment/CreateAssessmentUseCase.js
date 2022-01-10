"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAssessmentUseCase = void 0;
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
        await this.assessmentsRepository.save(Object.assign(Object.assign({}, data), { user: userId, questions: [] }));
    }
}
exports.CreateAssessmentUseCase = CreateAssessmentUseCase;
