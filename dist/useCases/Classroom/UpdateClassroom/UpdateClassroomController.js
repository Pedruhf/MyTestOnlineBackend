"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClassroomController = void 0;
class UpdateClassroomController {
    constructor(updateClassroomUseCase) {
        this.updateClassroomUseCase = updateClassroomUseCase;
    }
    async handle(req, res) {
        const { id } = req.params;
        try {
            await this.updateClassroomUseCase.execute(id, req.body);
            return res.send();
        }
        catch (error) {
            return res.status(400).send({ error: error.message || "Erro ao atualizar informações da sala" });
        }
    }
}
exports.UpdateClassroomController = UpdateClassroomController;
