"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClassroomUseCase = void 0;
class CreateClassroomUseCase {
    constructor(ClassroomsRepository) {
        this.classroomsRepository = ClassroomsRepository;
    }
    async execute(userId, data) {
        const classroom = await this.classroomsRepository.save({
            name: data.name,
            assessment: data.assessment,
            user: userId,
        });
        return classroom;
    }
}
exports.CreateClassroomUseCase = CreateClassroomUseCase;
