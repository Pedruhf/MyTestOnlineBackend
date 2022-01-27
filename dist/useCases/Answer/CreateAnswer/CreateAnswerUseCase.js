"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAnswerUseCase = void 0;
const AnswerModel_1 = require("../../../models/AnswerModel");
class CreateAnswerUseCase {
    constructor(answersRepository) {
        this.answersRepository = answersRepository;
    }
    async execute(userId, data) {
        const allAnswers = await this.answersRepository.findAll();
        allAnswers.forEach(answer => {
            if ((answer.assessment._id === data.assessment) &&
                (answer.user._id === userId)) {
                throw new Error("Você já respondeu esta avaliação");
            }
        });
        const answer = new AnswerModel_1.Answer({
            user: userId,
            assessment: data.assessment,
            questions: data.questions,
        });
        return await this.answersRepository.save(answer);
    }
}
exports.CreateAnswerUseCase = CreateAnswerUseCase;
