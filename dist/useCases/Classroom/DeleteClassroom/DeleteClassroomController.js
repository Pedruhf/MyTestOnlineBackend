"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteClassroomController = void 0;
class DeleteClassroomController {
    constructor(deleteClassroomUseCase) {
        this.deleteClassroomUseCase = deleteClassroomUseCase;
    }
    async handle(req, res) {
        const { id } = req.params;
        try {
            await this.deleteClassroomUseCase.execute(id);
            return res.send();
        }
        catch (error) {
            return res.status(400).send({ error: error.message || "Erro ao deletar sala" });
        }
    }
}
exports.DeleteClassroomController = DeleteClassroomController;
