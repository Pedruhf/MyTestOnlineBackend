"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClassroomUseCase = void 0;
const ClassroomModel_1 = require("../../../models/ClassroomModel");
class CreateClassroomUseCase {
    constructor(ClassroomsRepository, assessmentsRepository) {
        this.classroomsRepository = ClassroomsRepository;
        this.assessmentsRepository = assessmentsRepository;
    }
    async execute(userId, data) {
        const assessment = await this.assessmentsRepository.findById(data.assessment);
        if (!assessment) {
            throw new Error("Avaliação não encontrada");
        }
        const classroom = new ClassroomModel_1.Classroom({
            name: data.name,
            assessment: data.assessment,
            user: userId,
        });
        return await this.classroomsRepository.save(classroom);
    }
}
exports.CreateClassroomUseCase = CreateClassroomUseCase;
