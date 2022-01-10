"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClassroomController = void 0;
class CreateClassroomController {
    constructor(createClassroomUseCase) {
        this.createClassroomUseCase = createClassroomUseCase;
    }
    async handle(req, res) {
        const userId = req.userId;
        try {
            const classroom = await this.createClassroomUseCase.execute(userId, req.body);
            return res.send(classroom);
        }
        catch (error) {
            return res.status(400).send({ error: error.message || "Erro ao tentar criar nova sala" });
        }
    }
}
exports.CreateClassroomController = CreateClassroomController;
