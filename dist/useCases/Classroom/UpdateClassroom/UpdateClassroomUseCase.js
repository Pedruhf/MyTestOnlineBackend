"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClassroomUseCase = void 0;
class UpdateClassroomUseCase {
    constructor(ClassroomsRepository, assessmentsRepository) {
        this.classroomsRepository = ClassroomsRepository;
        this.assessmentsRepository = assessmentsRepository;
    }
    async execute(id, data) {
        const assessment = await this.assessmentsRepository.findById(data.assessment);
        if (!assessment) {
            throw new Error("Avaliação não encontrada");
        }
        await this.classroomsRepository.update(id, data);
    }
}
exports.UpdateClassroomUseCase = UpdateClassroomUseCase;
