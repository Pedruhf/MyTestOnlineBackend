"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoClassroomRepository = void 0;
const ClassroomModel_1 = require("../../models/ClassroomModel");
class MongoClassroomRepository {
    async save(classroom) {
        const newClassroom = await (await (await ClassroomModel_1.mongoClassroom.create(classroom)).populate(["user", "assessment"])).populate("assessment.questions");
        return newClassroom;
    }
    async findById(id) {
        const classroom = await (await ClassroomModel_1.mongoClassroom.findById(id).populate(["user", "assessment"])).populate("assessment.questions");
        classroom.assessment.user = undefined;
        return classroom;
    }
    async findAll() {
        const classroom = await ClassroomModel_1.mongoClassroom.find();
        return classroom;
    }
    async update(id, classroom) {
        await ClassroomModel_1.mongoClassroom.findByIdAndUpdate(id, classroom);
    }
    async delete(id) {
        await ClassroomModel_1.mongoClassroom.findByIdAndDelete(id);
    }
}
exports.MongoClassroomRepository = MongoClassroomRepository;
