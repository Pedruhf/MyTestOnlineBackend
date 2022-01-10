"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteClassroomUseCase = void 0;
class DeleteClassroomUseCase {
    constructor(classroomsRepository) {
        this.classroomsRepository = classroomsRepository;
    }
    async execute(id) {
        await this.classroomsRepository.delete(id);
    }
}
exports.DeleteClassroomUseCase = DeleteClassroomUseCase;
