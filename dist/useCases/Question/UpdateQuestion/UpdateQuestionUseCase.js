"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateQuestionUseCase = void 0;
class UpdateQuestionUseCase {
    constructor(questionsRepository) {
        this.questionsRepository = questionsRepository;
    }
    async execute(id, data) {
        await this.questionsRepository.update(id, data);
    }
}
exports.UpdateQuestionUseCase = UpdateQuestionUseCase;
