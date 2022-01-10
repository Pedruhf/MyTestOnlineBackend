"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAssessmentUseCase = void 0;
class UpdateAssessmentUseCase {
    constructor(assessmentsRepository) {
        this.assessmentsRepository = assessmentsRepository;
    }
    async execute(id, data) {
        await this.assessmentsRepository.update(id, data);
    }
}
exports.UpdateAssessmentUseCase = UpdateAssessmentUseCase;
