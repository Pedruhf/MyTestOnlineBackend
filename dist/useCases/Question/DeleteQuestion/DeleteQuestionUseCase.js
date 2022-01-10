"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteQuestionUseCase = void 0;
class DeleteQuestionUseCase {
    constructor(questionsRepository) {
        this.questionsRepository = questionsRepository;
    }
    async execute(id) {
        await this.questionsRepository.delete(id);
    }
}
exports.DeleteQuestionUseCase = DeleteQuestionUseCase;
