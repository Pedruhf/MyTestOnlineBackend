"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateQuestionUseCase = void 0;
const QuestionModel_1 = require("../../../models/QuestionModel");
class CreateQuestionUseCase {
    constructor(questionsRepository, assessmentsRepository) {
        this.questionsRepository = questionsRepository;
        this.assessmentsRepository = assessmentsRepository;
    }
    async execute(data) {
        const assessment = await this.assessmentsRepository.findById(data.assessment);
        if (!assessment) {
            throw new Error("Avaliação não encontrada");
        }
        const question = new QuestionModel_1.Question(data);
        await this.questionsRepository.save(question);
        await this.assessmentsRepository.update(data.assessment, {
            title: assessment.title,
            description: assessment.description,
            questions: [...assessment.questions, question._id],
        });
    }
}
exports.CreateQuestionUseCase = CreateQuestionUseCase;
