"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetClassroomController = void 0;
class GetClassroomController {
    constructor(getClassroomUseCase) {
        this.getClassroomUseCase = getClassroomUseCase;
    }
    async handle(req, res) {
        const userId = req.userId;
        const { id } = req.params;
        try {
            const classrooms = await this.getClassroomUseCase.execute(userId, id);
            return res.send(classrooms);
        }
        catch (error) {
            return res.status(400).send({ error: error.message || "Erro ao buscar sala" });
        }
    }
}
exports.GetClassroomController = GetClassroomController;
