"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetQuestionUseCase = void 0;
class GetQuestionUseCase {
    constructor(questionsRepository) {
        this.questionsRepository = questionsRepository;
    }
    async execute(id) {
        if (id) {
            const assessment = await this.questionsRepository.findById(id);
            if (!assessment) {
                throw new Error("Questão não encontrada");
            }
            return assessment;
        }
        return await this.questionsRepository.findAll();
    }
}
exports.GetQuestionUseCase = GetQuestionUseCase;
