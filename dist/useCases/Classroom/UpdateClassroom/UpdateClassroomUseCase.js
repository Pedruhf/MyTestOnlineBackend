"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClassroomUseCase = void 0;
class UpdateClassroomUseCase {
    constructor(ClassroomsRepository) {
        this.classroomsRepository = ClassroomsRepository;
    }
    async execute(id, data) {
        await this.classroomsRepository.update(id, data);
    }
}
exports.UpdateClassroomUseCase = UpdateClassroomUseCase;
