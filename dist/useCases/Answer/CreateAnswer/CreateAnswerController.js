"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAnswerController = void 0;
class CreateAnswerController {
    constructor(createAnswerUseCase) {
        this.createAnswerUseCase = createAnswerUseCase;
    }
    async handle(req, res) {
        const userId = req.userId;
        try {
            const answer = await this.createAnswerUseCase.execute(userId, req.body);
            return res.send(answer);
        }
        catch (error) {
            return res.status(400).send({ error: error.message || "Erro ao tentar enviar respostas" });
        }
    }
}
exports.CreateAnswerController = CreateAnswerController;
