"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetQuestionUseCase = void 0;
class GetQuestionUseCase {
    constructor(questionsRepository) {
        this.questionsRepository = questionsRepository;
    }
    async execute(id) {
        if (id) {
            return await this.questionsRepository.findById(id);
        }
        return await this.questionsRepository.findAll();
    }
}
exports.GetQuestionUseCase = GetQuestionUseCase;
