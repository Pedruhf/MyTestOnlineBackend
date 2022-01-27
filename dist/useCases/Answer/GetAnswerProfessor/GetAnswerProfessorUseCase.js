"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAnswerProfessorUseCase = void 0;
class GetAnswerProfessorUseCase {
    constructor(answersRepository) {
        this.answersRepository = answersRepository;
    }
    async execute(userId, assessmentId) {
        const answers = await this.answersRepository.findAll();
        const filteredAnswers = answers.filter(answer => answer.user._id === userId &&
            answer.assessment._id === assessmentId);
        return filteredAnswers;
    }
}
exports.GetAnswerProfessorUseCase = GetAnswerProfessorUseCase;
