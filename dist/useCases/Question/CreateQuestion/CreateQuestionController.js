"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateQuestionController = void 0;
class CreateQuestionController {
    constructor(createQuestionUseCase) {
        this.createQuestionUseCase = createQuestionUseCase;
    }
    async handle(req, res) {
        try {
            await this.createQuestionUseCase.execute(req.body);
            return res.send();
        }
        catch (error) {
            return res.status(400).send({ error: error.message || "Erro ao criar questão" });
        }
    }
}
exports.CreateQuestionController = CreateQuestionController;
