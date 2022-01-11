"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAnswerProfessorUseCase = void 0;
class GetAnswerProfessorUseCase {
    constructor(answersRepository) {
        this.answersRepository = answersRepository;
    }
    async execute(userId, assessmentId) {
        const answers = await this.answersRepository.findAll();
        const filteredAnswers = answers.filter(answer => answer.assessment._id.valueOf() === assessmentId &&
            answer.assessment.user.valueOf() === userId);
        return filteredAnswers;
    }
}
exports.GetAnswerProfessorUseCase = GetAnswerProfessorUseCase;
