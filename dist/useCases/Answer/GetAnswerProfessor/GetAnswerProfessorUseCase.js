"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAnswerProfessorUseCase = void 0;
class GetAnswerProfessorUseCase {
    constructor(answersRepository) {
        this.answersRepository = answersRepository;
    }
    async execute(userId) {
        const answers = await this.answersRepository.findAll();
        const userAnswers = answers.filter(answer => {
            if (answer.assessment.user.valueOf() === userId) {
                return answer;
            }
        });
        return userAnswers;
    }
}
exports.GetAnswerProfessorUseCase = GetAnswerProfessorUseCase;
