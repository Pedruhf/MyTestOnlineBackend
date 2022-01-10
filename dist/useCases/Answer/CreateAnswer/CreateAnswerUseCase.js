"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAnswerUseCase = void 0;
class CreateAnswerUseCase {
    constructor(answersRepository) {
        this.answersRepository = answersRepository;
    }
    async execute(userId, data) {
        const allAnswers = await this.answersRepository.findAll();
        allAnswers.forEach(answer => {
            if (answer.assessment._id.valueOf() === data.assessment &&
                answer.user.valueOf() === userId) {
                throw new Error("Você já respondeu esta avaliação");
            }
        });
        const aswner = await this.answersRepository.save(Object.assign(Object.assign({}, data), { user: userId }));
        return aswner;
    }
}
exports.CreateAnswerUseCase = CreateAnswerUseCase;
