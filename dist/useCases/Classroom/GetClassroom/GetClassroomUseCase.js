"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetClassroomUseCase = void 0;
class GetClassroomUseCase {
    constructor(classroomsRepository) {
        this.classroomsRepository = classroomsRepository;
    }
    async execute(userId, id) {
        if (id) {
            const classroom = await this.classroomsRepository.findById(id);
            if (!classroom) {
                throw new Error("Sala não encontrada");
            }
            return classroom;
        }
        const classrooms = await this.classroomsRepository.findAll();
        if (!classrooms) {
            throw new Error("Avaliações não encontradas");
        }
        return classrooms.filter(classroom => classroom.user._id.valueOf() === userId);
    }
}
exports.GetClassroomUseCase = GetClassroomUseCase;
